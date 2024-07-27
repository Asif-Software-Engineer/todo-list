import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { Edit } from "./Edit";
import axios from "axios";
uuidv4();

export const Wrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://api.freeapi.app/api/v1/todos");
      console.log(response.data.data);
      if (!response.data.success) {
        throw new Error("Failed to fetch todos");
      }
      const todos = response.data.data;
      setTodos(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post(
        "https://api.freeapi.app/api/v1/todos",
        {
          title: todo,
        }
      );
      console.log(response);
      if (!response.data.success) {
        throw new Error("todo not created");
      }
      fetchTodos();
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `https://api.freeapi.app/api/v1/todos/${id}`
      );
      console.log(response);
      if (!response.data.success) {
        throw new Error("todo not deleted");
      }
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todos:", error);
    }
    console.log(id);
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };
  const editTask = async (task, id) => {
    try {
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, task, isEditing: false } : todo
        )
      );
      const response = await axios.patch(
        `https://api.freeapi.app/api/v1/todos/${id}`,
        {
          title: task,
        }
      );
      console.log(response);
      if (!response.data.success) {
        throw new Error("todo not updated");
      }
      fetchTodos();
    } catch (error) {
      console.error("Error updating todos:", error);
    }
  };
  return (
    <div className=" flex justify-center">
      <div className="text-2xl w-[60%] bg-[#1A1A40] mt-12 p-8 rounded-br text-white">
        <h1>ToDo List</h1>
        <Form addTodo={addTodo} />

        {todos.map((todo, index) =>
          todo.isEditing ? (
            <Edit editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

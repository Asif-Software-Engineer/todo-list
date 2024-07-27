import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between align-center bg-[#8758ff] text-[#fff] py-3 px-4 mb-4">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.title}
      </p>
      <div>
        <i className="fa fa-pencil-square-o cursor-pointer" onClick={() => editTodo(task._id)}></i>
        <i className="fa fa-trash cursor-pointer" onClick={() => deleteTodo(task._id)}></i>
      </div>
    </div>
  );
};

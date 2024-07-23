import React, { useState } from "react";

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  };
  return (
    <form className="w-full " onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-transparent border border-purple-500 px-3 py-2 mt-4 mb-8 text-[#fff] w-[500px]"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        type="submit"
        className="bg-[#8758ff] text-[#fff] none p-2 m-1 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};

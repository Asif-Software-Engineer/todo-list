import React, { useState } from "react";

export const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task._id);
    setValue("")
  };
  return (
    <form className="w-full m-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-transparent border border-purple-500 px-3 py-2 mt-4 mb-8 text-[#fff] w-[500px]"
        value={value}
        placeholder="Update your Task"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        type="submit"
        className="bg-[#8758ff] text-[#fff] none p-2 m-1 cursor-pointer"
      >
        Update Task
      </button>
    </form>
  );
};

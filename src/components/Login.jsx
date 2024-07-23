import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("wrong Email or Password");
    }
  };

  return (
    <div className="w-[500px] rounded-lg flex flex-col justify-center align-center m-auto mt-[6%] bg-[#1A1A40] pb-8 text-white">
      <div className="flex flex-col justify-center align-center gap-y-10 w-full mt-8">
        <div className="text-3xl font-bold">Login to your Account</div>
        <hr className="w-20 mb-8 h-2 bg-[#8758ff] mx-auto none rounded-lg my-auto flex align-center justify-center" />
      </div>
      <form onSubmit={handleLogin}>
        <div className="mt-18 flex flex-col gap-y-8">
          <div className="flex flex-col justify-center align-center">
            <span className="flex justify-start mx-14 px-4">User Email:</span>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="email"
              className="mx-auto w-[385px] h-12 bg-white rounded-lg text-[#8758ff] p-4"
              placeholder="enter your username here"
            />
          </div>
          <div className="flex flex-col justify-center align-center">
            <span className="flex justify-start mx-14 px-4">Password:</span>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="password"
              className="mx-auto w-[385px] h-12 bg-white rounded-lg text-[#8758ff] p-4"
              placeholder="enter your username here"
            />
          </div>
        </div>
        <div className="flex justify-center align-center gap-x-20 mt-8">
          <button
            type="submit"
            className="flex justify-center align-center w-[120px] h-12 hover:bg-white hover:text-[#8758ff] text-white bg-[#8758ff] rounded-[50px] font-[19px] font-bold cursor-pointer p-[11px]"
          >
            Login
          </button>
        </div>
      </form>
      {/* <div className="mt-6 text-white font-semibold">
        Lost Password?{" "}
        <span className="text-[#8758ff] cursor-pointer pl-2">Click Here!</span>
      </div> */}
      <p className="text-center mt-5 mb-0">
        Don't have an account?
        <a href="/signup" className="font-bold pl-4 text-[#8758ff] ">
          <u>Sign Up Here</u>
        </a>
      </p>
    </div>
  );
};

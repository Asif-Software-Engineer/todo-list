import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/home/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { ProRoutes } from "./components/ProRoutes";

function App() {

  return (
    <div className="text-center w-full h-full bg-[#8758ff]">
      <div>
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<ProRoutes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

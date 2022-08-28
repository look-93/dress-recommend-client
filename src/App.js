import React from "react";
import Login from "./layout/authentication/login/index";
import Signup from "./layout/authentication/sign-up/index";
import Dashboard from "./layout/dashboard/index";
import Main from "./layout/dashboard/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

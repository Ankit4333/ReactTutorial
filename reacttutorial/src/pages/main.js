import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import Error from "./error";
import About from "./about";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="About" element={<About></About>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

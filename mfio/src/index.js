import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Routes/App";
import Portfolio from "./Routes/Portfolio";
import Contact from "./Routes/Contact";
import Design from "./Routes/Design";
import Development from "./Routes/Development"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Design" element={<Design/>} />
      <Route path="/Development" element={<Development/>} />


    </Routes>
  </BrowserRouter>,

  document.querySelector("#root")
);

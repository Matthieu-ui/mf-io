import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Routes/App";
import Projects from "./Routes/Projects";
import Resume from "./Routes/Resume";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/news" element={<Projects />} />
      <Route path="/about" element={<Resume />} />
    </Routes>
  </BrowserRouter>,

  document.querySelector("#root")
);

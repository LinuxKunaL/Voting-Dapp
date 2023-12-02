import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Voter from "./components/register/Voter";
import Candidate from "./components/register/Candidate";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="dark:bg-gray-900 h-screen overflow-y-auto">
        <div className="container m-auto flex flex-col gap-5 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/voterRegister" element={<Voter />} />
            <Route path="/candidateRegister" element={<Candidate />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

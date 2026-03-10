import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import "./App.css";
import React from "react";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

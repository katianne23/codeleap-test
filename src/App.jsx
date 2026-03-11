import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import "./App.css";
import React from "react";
import Posts from "./components/Post/Post";

function SignupWithNavigate() {
  const navigate = useNavigate();
  return <Signup navigate={navigate} />;
}
export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupWithNavigate />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

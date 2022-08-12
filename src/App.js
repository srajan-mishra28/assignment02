import Posts from "./components/Posts";
import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Comment from "./components/Comment";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
      <Comment />
    </div>
  );
}

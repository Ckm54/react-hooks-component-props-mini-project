import React from "react";
import blogData from "../data/blog";
import Header from "./Header"

console.log(blogData);

function App() {
  return (
    <Header name={blogData.name}/>
  );
}

export default App;

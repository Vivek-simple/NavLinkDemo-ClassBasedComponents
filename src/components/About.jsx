import React, { useState } from "react";
function About() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <h1 className="text-2xl text-center">Hello I am Vivek Gangwar </h1>
      <button
        onClick={() => {
          import("../data").then((module) => setTodoList(module.todos));
        }}
      >
        hiiiii
      </button>
      {todoList.map((todo, idx) => (
        <p key={idx}>{todo.title}</p>
      ))}
    </div>
  );
}

export default About;

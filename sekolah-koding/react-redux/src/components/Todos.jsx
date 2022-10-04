import React from "react";

function Todos() {
  let todos = ["menyapu", "membersihkan", "belajar"];
  return <ul>
    {
        todos.map((todo, index) => <li key={index}>{todo}</li>)
    }
  </ul>;
}

export default Todos;

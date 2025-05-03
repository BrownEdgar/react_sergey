import React from "react";

function Home({ title }) {
  return <div>
    <h1>{title}</h1>
    <button onClick={() => localStorage.setItem('login', true)}>login</button>
    <button onClick={() => localStorage.setItem('login', false)}>logout</button>
  </div>;
}

export default Home;

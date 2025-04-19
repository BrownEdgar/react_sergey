import React, { useState } from "react";
import A from './A';
import { MyContext } from './contexts/MyContext';
import './App.css'

function App(props) {
  const [value, setValue] = useState(17);
  console.log(props.children);

  const handleClick = () => {
    setValue(value + 1)
  }
  return <div>
    <h1>App Component</h1>
    <MyContext.Provider value={{ value, x: 'hello', y: 8, handleClick }}>
      <A />
    </MyContext.Provider>



  </div>;
}

export default App;

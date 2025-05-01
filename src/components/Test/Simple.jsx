import React from "react";
import './Simple.scss'
function Simple({ children }) {
  return <div className='Simple'>
    <h1>Lorem, ipsum dolor.</h1>
    {children}
    <button>Read more</button>
  </div>;
}

export default Simple;

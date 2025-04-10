import React from "react";
import './List.css'


function List({ data = [], handleDelete }) {
  return <div className='List'>
    {data.length === 0 ? <h1>no Content...</h1> : null}
    <ol>
      {
        data.map((elem) => {
          return (
            <li key={elem}>
              {elem.toUpperCase()}
              <button onClick={() => handleDelete(elem)}>X</button>
            </li>
          )
        })
      }

    </ol>
  </div>;
}

export default List;

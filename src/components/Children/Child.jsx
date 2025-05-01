import React, { useState } from "react";



function Child() {
  const [count, setCount] = useState(1);
  if (count > 10) {
    throw new Error('Lorem ipsum dolor sit. COUNT!!!!')
  }

  return <div>

    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>add</button>

  </div>;
}

export default Child;

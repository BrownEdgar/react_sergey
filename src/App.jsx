import { useState } from 'react';
import List from './components/List/List';
import './App.css'


export default function App() {
  const [x, setX] = useState(['Html', 'Css', 'Java Script', 'React.js', 'Node.js', 'Python', "Redis"]);

  const handleDelete = (delElem) => {
    setX(x.filter(elem => elem !== delElem))
  }
  const sort = () => {
    const result = x.toSorted()
    setX(result)
  }

  return (
    <div>

      <h1>Our Users <span>{x.length}</span></h1>
      <List data={x} handleDelete={handleDelete} />
      <button onClick={sort}>sort</button>
    </div>
  );
}


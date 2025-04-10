import React, { useState, useEffect } from "react";
import './App.css'
import Posts from '../Posts/Posts';


function App() {
  const [cars, setCars] = useState([
    { id: 1, name: '🚕', color: 'yellow', price: 5800, deletedAt: null },
    { id: 4, name: '🚒', color: 'red', price: 35900, deletedAt: null },
    { id: 3, name: '🚑', color: 'white', price: 18000, deletedAt: null },
    { id: 2, name: '🚌', color: 'yellow', price: 25800, deletedAt: null },
  ]);
  const [isOpen, setIsOpen] = useState(false);




  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //       .then(res => res.json())
  //       .then(data => setPosts(data))
  //   }
  //   fetchData()
  // }, [])


  useEffect(() => {
    setIsOpen(true)
  }, []);



  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleToggle = (id, action) => {


    const result = cars.map(post => {
      if (post.id == id) {
        post.deletedAt = action === 'delete' ? new Date().toLocaleDateString() : null
      }
      return post
    })
    setCars(result)
  }



  return (
    <div className='App'>
      <h1>FETCH DATA In React</h1>


      <button onClick={handleClick}>{isOpen ? "hide" : "show"} Posts</button>

      {
        isOpen ? <Posts cars={cars} handleToggle={handleToggle} /> : null
      }


    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { plus } from './features/counter/counterSlice';
import { addUser } from './features/users/usersSlice';
import Posts from './componsnts/Posts';
import { deletePost, sortPosts } from './features/Posts/PostsSlice';

function App() {

  const dispatch = useDispatch()

  const [currentID, setcurrentID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const x = e.target.number.value;
    setcurrentID(x)
    e.target.reset()
  }

  const handleSort = () => {
    dispatch(sortPosts())
  }

  return <div className='App'>
    <h1>REDUX {name}</h1>

    <form onSubmit={handleSubmit}>
      <input type="number" min={1} max={100} id='number' />
      <input type="submit" value="save" />
    </form>
    <button onClick={handleSort}>sort</button>

    <Posts currentID={currentID} />
  </div>;
}

export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, savePosts } from '../features/Posts/PostsSlice';
import './Posts.css'
function Posts({ currentID }) {
  const posts = useSelector(({ posts }) => posts)
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => dispatch(savePosts(data)))
    }
    fetchData()
  }, []);

  const handledelete = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 200) {
          dispatch(deletePost(id))
        }
      })
  }

  return <div className='Posts'>
    {
      posts.map(elem => {
        return (
          <div key={elem.id} className={currentID === elem.id ? "active" : ""}>
            <h2>{elem.id}</h2>
            <h2>{elem.title}</h2>
            <span onClick={() => handledelete(elem.id)}>&#10006;</span>
          </div>
        )
      })
    }
  </div>;
}

export default Posts;

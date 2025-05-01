import React from "react";
import useFetchData from '../../hooks/useFetchData';
import './Posts.css'
import { Link } from 'react-router';
import PostsLoader from '../../Loaders/PostsLoader';
function Posts() {
  const [data, loading, error] = useFetchData('https://jsonplaceholder.typicode.com/posts')
  console.log(data);

  if (loading) {
    return <div className='Posts'>
      <PostsLoader />
    </div>
  }

  return <div className='Posts'>
    <h1>Posts</h1>
    <div className="Posts__wrapper">
      {
        data && data.map(post => {
          return (
            <div className='Posts__item' key={post.id}>
              <span>{post.id}</span>
              <Link to={`${post.id}`}>{post.title}</Link>
            </div>
          )
        })
      }
    </div>
  </div>;
}

export default Posts;

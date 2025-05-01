import React from "react";
import { Link, useParams } from 'react-router';
import useFetchData from '../../hooks/useFetchData';
import './Post.css'
import PostLoader from '../../Loaders/PostLoader';
function Post() {
  const { id } = useParams()
  const [data, loading] = useFetchData(`https://jsonplaceholder.typicode.com/posts/${id}`)


  return <div className='Post'>
    <h1>Welcome To the Post N{id}</h1>
    <Link to={'/posts'}>All Posts</Link>
    <div className="Post_wrapper">

      {!loading ? <PostLoader /> : (
        <>
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>
        </>
      )}

    </div>
  </div>;
}

export default Post;

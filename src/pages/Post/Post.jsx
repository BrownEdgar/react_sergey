import React from "react";
import { Link, useNavigate, useParams } from 'react-router';
import useFetchData from '../../hooks/useFetchData';
import './Post.css'
import PostLoader from '../../Loaders/PostLoader';
function Post() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, loading] = useFetchData(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const getPost = (action) => {
    action === 'prev' ? navigate(`/posts/${(parseInt(id) - 1)}`) :
      navigate(`/posts/${(parseInt(id) + 1)}`)
  }

  return <div className='Post'>
    <h1>Welcome To the Post N{id}</h1>
    <Link to={'/posts'}>All Posts</Link>
    <div className="Post_wrapper">

      {loading ? <PostLoader /> : (
        <div>
          <h2>{data?.title}</h2>
          <p>{data?.body}</p>
        </div>
      )}
      <div>
        <button onClick={() => getPost('prev')} disabled={id <= 1}>prev</button>
        <button onClick={() => getPost('next')} disabled={id >= 100}>next</button>
      </div>
    </div>
  </div>;
}

export default Post;

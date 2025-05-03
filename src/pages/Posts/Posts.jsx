import React, { useState } from "react";
import useFetchData from '../../hooks/useFetchData';
import './Posts.css'
import { Link } from 'react-router';
import PostsLoader from '../../Loaders/PostsLoader';
import ReactPaginate from 'react-paginate';
function Posts() {
  const [data, loading,] = useFetchData('http://localhost:3000/posts')
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);


  const slice = data?.slice((page - 1) * perPage, page * perPage)
  const totalPages = Math.ceil(data?.length / perPage);
  const setPageHandler = ({ selected }) => setPage(selected + 1)

  if (loading) {
    return <div className='Posts'>
      <PostsLoader />
    </div>
  }

  return <div className='Posts'>
    <h1>Posts</h1>
    <div className="Posts__wrapper" style={{ minHeight: `${perPage / 2 * 104}px` }}>
      {
        data && slice.map(post => {
          return (
            <div className='Posts__item' key={post.id}>
              <span>{post.id}</span>
              <Link to={`${post.id}`}>{post.title}</Link>
            </div>
          )
        })
      }
    </div>

    <div className="Posts__pagination">
      {/* <ul>
        {
          Array.from({ length: totalPages }, (_, index) => ++index)
            .map(n => <li
              className={n === page ? "active" : ''}
              key={n}
              onClick={() => setPageHandler(n)}>{n}</li>)
        }
      </ul> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next➡️"
        onPageChange={setPageHandler}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="⬅️  previous"
        renderOnZeroPageCount={null}
        activeClassName="active"
        previousClassName='previous'
        nextClassName='next'
      />
    </div>
  </div>;
}

export default Posts;

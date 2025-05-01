import React from "react";
import './ErrorPage.css'
import { Link, useNavigate } from 'react-router';
function ErrorPage() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return <div className='ErrorPage'>
    <h1>404 | Page not found</h1>
    <button onClick={goHome}>go home</button>
    <Link to={'/'}>Go home</Link>
    <img src="https://png.pngtree.com/background/20220714/original/pngtree-internet-network-warning-404-error-page-or-file-not-found-for-picture-image_1607201.jpg" alt="error image" />
  </div>;
}

export default ErrorPage;

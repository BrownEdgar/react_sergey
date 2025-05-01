import React from "react";
import './Navbar.css'
import { NavLink } from 'react-router';
import ROUTES from '../../routes';
function Navbar() {
  return <header>
    <ul>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.BLOG}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.POSTS}>Posts</NavLink>
      </li>
    </ul>
  </header>;
}

export default Navbar;

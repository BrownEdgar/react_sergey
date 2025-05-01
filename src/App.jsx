import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Posts from "./pages/Posts/Posts";
import { Routes, Route, Navigate, Link } from "react-router";

import './App.css'
import Post from './pages/Post/Post';
import ROUTES from './routes';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path={ROUTES.HOME} element={<Home title="my home page" />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>

      <footer>

        <div>
          <h3>menu</h3>
          <ul>
            <li>
              <Link to={ROUTES.HOME}>home</Link>
            </li>
            <li>
              <Link to={ROUTES.BLOG}>Blog</Link>
            </li>
            <li>
              <Link to={ROUTES.POSTS}>Posts</Link>
            </li>

          </ul>
        </div>
        <p>© Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo unde perspiciatis cumque.</p>

      </footer>

    </div>
  );
}

export default App;

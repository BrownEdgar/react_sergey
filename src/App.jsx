import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "./features/counter/couterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { deletePostsByID, getAllPosts } from "./features/Posts/PostsSlice";
import Axios from "./components/Axios/Axios";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import AddForm from "./components/AddForm/AddForm";

function App() {
  const counter = useSelector((state) => state.counter);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addCounter({ y: 2 }));
  };
  const handleDelete = (id) => {
    dispatch(deletePostsByID(id));
  };

  return (
    <div className='App'>
      <h1>REDUX {counter}</h1>
      <Axios />
      <button onClick={handleClick}>plus</button>
      <hr />
      <AddForm />
      <div className='users'>
        {posts.data?.map((post) => {
          return (
            <h2 key={post.id}>
              {post.title}
              <span onClick={() => handleDelete(post.id)}>
                {" "}
                <FontAwesomeIcon icon={faXmark} />{" "}
              </span>
            </h2>
          );
        })}
      </div>
    </div>
  );
}

export default App;

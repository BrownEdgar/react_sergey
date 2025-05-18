import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/couterSlice";
import usersSlice from "../features/users/usersSlice";
import postsSlice from "../features/posts/postsSlice";

const myFirstMiddleWare = () => (next) => (action) => {
  if (action.type === "counter/addCounter") {
    const x = action.payload?.x;
    if (x === undefined || typeof x !== "number") {
      console.error("invalid x type");
      return;
    }
  }
  console.log("Time:", new Date().toLocaleTimeString(), "type:", action.type);
  next(action);
};

const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    posts: postsSlice,
  },
  middleware: (defaultMiddleWares) =>
    defaultMiddleWares().concat(myFirstMiddleWare),
});

export default store;

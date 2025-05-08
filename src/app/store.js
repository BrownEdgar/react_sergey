import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../features/counter/counterSlice";
import usersSlice from "../features/users/usersSlice";
import postsSlice from "../features/Posts/PostsSlice";



export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    posts: postsSlice
  },
})
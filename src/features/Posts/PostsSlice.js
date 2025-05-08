import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    savePosts(_, action) {
      return action.payload
    },
    deletePost(state, action) {
      const result = state.filter(elem => elem.id !== action.payload);
      return result
    },
    sortPosts(state) {
      return state.toSorted((a, b) => a.title.localeCompare(b.title))
    }
  }
})

export const { savePosts, deletePost, sortPosts } = postsSlice.actions

export default postsSlice.reducer


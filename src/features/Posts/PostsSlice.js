import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios.config";

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const response = await instance.get("posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const deletePostsByID = createAsyncThunk(
  "posts/deletePostsByID",
  async (id) => {
    const response = await instance.delete(`posts/${id}`);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    savePosts(state, action) {
      state.data.push(action.payload);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      return {
        data: action.payload,
        loading: false,
      };
    });
    builder
      .addCase(getAllPosts.rejected, () => {
        return {
          data: [],
          loading: false,
        };
      })
      .addCase(deletePostsByID.fulfilled, (state, action) => {
        return {
          data: state.data.filter((post) => post.id !== action.payload.id),
          loading: false,
        };
      });
  },
});

export const { savePosts } = postsSlice.actions;
export default postsSlice.reducer;

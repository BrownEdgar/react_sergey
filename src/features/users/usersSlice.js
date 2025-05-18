import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import extraReducersFn from "./extraReducersFn";
import { getUsers } from "./usersApi";

export const getAllUsers = createAsyncThunk("users/getAllUsers", getUsers);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: extraReducersFn,
});

export default usersSlice.reducer;

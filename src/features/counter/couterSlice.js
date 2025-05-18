import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    plus(state) {
      return state + 1;
    },
    addCounter(state, action) {
      return state + action.payload.x;
    },
  },
});

export const { plus, addCounter } = counterSlice.actions;

export default counterSlice.reducer;

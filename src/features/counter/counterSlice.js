import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    plus(state, action) {
      return state + 1
    }
  }
})


export const { plus } = counterSlice.actions;

export default counterSlice.reducer;

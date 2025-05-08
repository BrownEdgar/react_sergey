import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: ['gago'],
  reducers: {
    addUser(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }

    },
  }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer;

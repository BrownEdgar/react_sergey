import { getAllUsers } from "./usersSlice";

const extraReducersFn = (builder) => {
  builder
    .addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllUsers.fulfilled, (_, action) => {
      return {
        data: action.payload,
        loading: false,
      };
    })
    .addCase(getAllUsers.rejected, (_, action) => {
      return {
        data: [],
        loading: false,
        error: action.error,
      };
    });
};
export default extraReducersFn;

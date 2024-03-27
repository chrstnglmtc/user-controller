import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  } as UserState,
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;

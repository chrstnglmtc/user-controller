import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails } from "../types/user";

interface UserDetailState {
  users: UserDetails[];
  loading: boolean;
  error: string | null;
}

export const userDetailSlice = createSlice({
  name: "usersDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  } as UserDetailState,
  reducers: {
    getUserDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserDetailsSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUserDetailsFailure: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUserDetailsStart, getUserDetailsSuccess, getUserDetailsFailure } =
  userDetailSlice.actions;

export default userDetailSlice.reducer;

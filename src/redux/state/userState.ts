import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserDetails } from "../types/user";


interface UserState {
  users: User[];
  userDetails: Record<string, UserDetails>; 
  loading: boolean;
  error: string | null;
}

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userDetails: {},
    loading: false,
    error: null,
  } as UserState,
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.userDetails = {};
    },
    getUsersFailure: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;

// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password: '',
    // Add more initial state as needed
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setUsername, setPassword } = loginSlice.actions;
export default loginSlice.reducer;

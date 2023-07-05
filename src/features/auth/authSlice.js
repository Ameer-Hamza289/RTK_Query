import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLoggedIn: false,
    userToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("Reducer:",action.payload);
      state.user = action.payload;
      state.isLoggedIn = true;
      // state.token=action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.userToken = null;
      // localStorage.removeItem('userToken')
    },
    setToken: (state, action) => {
      state.userToken = action.payload;
      // localStorage.setItem('userToken',state.userToken)
    },
  },
});

export const { setUser, clearUser, setToken } = authSlice.actions;

export default authSlice.reducer;

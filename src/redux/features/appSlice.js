import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  loggedinUser: null,
  counter: 0
};

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      console.log(state.accessToken);
    },
    setLoggedinUser: (state, action) => {
      state.loggedinUser = action.payload;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  }
});

export const {
  reset,
  setAccessToken,
  setLoggedinUser,
  increment,
  decrement
} = app.actions;

export default app.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { signup, login, current, logout } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = 'signupPending';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.isLoading = 'signupSucces';
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = 'loginPending';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = 'loginSucces';
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(current.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = 'logout';
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = {};
        state.token = '';
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

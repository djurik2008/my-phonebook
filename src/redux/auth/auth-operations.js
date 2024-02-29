import { createAsyncThunk } from '@reduxjs/toolkit';

import { signupPost, loginPost, currentGet, logoutPost } from 'api/auth-api';
import Notiflix from 'notiflix';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupPost(body);
      Notiflix.Report.success(
        `Congratulations ${data.user.name}, you have successfully registered`
      );
      return data;
    } catch (error) {
      Notiflix.Report.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginPost(body);
      Notiflix.Report.success(`Welcome back ${data.user.name}`);
      return data;
    } catch (error) {
      Notiflix.Report.failure(error.message, 'Wrong email or password');
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentGet(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutPost();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

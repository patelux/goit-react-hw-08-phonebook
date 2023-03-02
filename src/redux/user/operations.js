import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await instance.post('/users/signup', credentials);
      setAuthHeader(result.data.token);
      console.log('registeres used', result);
      return result.data;
    } catch (error) {
      Notify.failure('You input data in false format, please try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await instance.post('/users/login', credentials);
    console.log('loigined used', result);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
      Notify.failure('False login or e-mail, please try again');
      return thunkAPI.rejectWithValue(error.message);
      
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
 
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {

      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const result = await instance.get('/users/current');
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

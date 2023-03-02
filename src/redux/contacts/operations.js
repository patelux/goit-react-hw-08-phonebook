import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../user/operations';

export const getContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkAPI) => {
      try {
        const res = await instance.get('/contacts');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const res = await instance.post('/contacts', contact);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const res = await instance.delete(`/contacts/${contactId}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
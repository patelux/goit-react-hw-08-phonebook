import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContacts, addContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
    },

    [getContacts.fulfilled]: (state, { payload }) => {
      state.items = [...payload].reverse();
      state.isLoading = false;
      console.log(payload);
    },

    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },

    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload.id);
      state.isLoading = false;
    },

    [deleteContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },

    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const contactReducer = contactSlice.reducer;

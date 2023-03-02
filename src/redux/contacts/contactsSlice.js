import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
} from '../contacts/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getContacts.pending, deleteContact.pending, addContact.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getContacts.rejected, deleteContact.rejected, addContact.rejected), (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
});

export const contactReducer = contactsSlice.reducer;

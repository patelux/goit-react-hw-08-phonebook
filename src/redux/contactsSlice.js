import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,

// extraReducer by builder: 

  extraReducers: builder => builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
    state.items = [...payload].reverse();
    state.isLoading = false;
  })
  .addCase(deleteContact.fulfilled, (state, { payload }) => {
    state.items = state.items.filter(item => item.id !== payload.id);
    state.isLoading = false;
  })
  .addCase(addContact.fulfilled, (state, { payload }) => {
    state.items = [payload, ...state.items];
    state.isLoading = false;
  })
  .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending), state => {
    state.isLoading = true;
  })
  .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected), (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
  })
});

export const contactReducer = contactSlice.reducer;

// extraReducer (without builder)//////////////////// →

// extraReducers: {
//   [fetchContacts.pending]: state => {
//     state.isLoading = true;
//   },

//   [fetchContacts.fulfilled]: (state, { payload }) => {
//     state.items = [...payload].reverse();
//     state.isLoading = false;
//     console.log(payload);
//   },

//   [fetchContacts.rejected]: (state, { payload }) => {
//     state.error = payload;
//     state.isLoading = false;
//   },

//   [deleteContact.pending]: state => {
//     state.isLoading = true;
//   },

//   [deleteContact.fulfilled]: (state, { payload }) => {
//     state.items = state.items.filter(item => item.id !== payload.id);
//     state.isLoading = false;
//   },

//   [deleteContact.rejected]: (state, { payload }) => {
//     state.error = payload;
//     state.isLoading = false;
//   },

//   [addContact.pending]: state => {
//     state.isLoading = true;
//   },

//   [addContact.fulfilled]: (state, { payload }) => {
//     state.items = [payload, ...state.items];
//     state.isLoading = false;
//   },
//   [addContact.rejected]: (state, { payload }) => {
//     state.error = payload;
//     state.isLoading = false;
//   },
// },
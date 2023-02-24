import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const contactSlice = createSlice({

  name: 'contacts',

  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

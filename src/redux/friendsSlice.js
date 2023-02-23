import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const friendSlice = createSlice({
  // Имя слайса
  name: 'friends',
  // Начальное состояние редюсера слайса
  initialState,
  // Объект редюсеров
  reducers: {
    addFriend(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteFriend(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addFriend, deleteFriend } = friendSlice.actions;
export const friendReducer = friendSlice.reducer;

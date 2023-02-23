import { createSelector } from '@reduxjs/toolkit';

export const getFriends = state => state.friends.items;
export const getFilter = state => state.filter.value;

export const getFilteredFriends = createSelector(
  [getFriends, getFilter],

  (friends, filter) => {
    return friends.filter(friend =>
      friend.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

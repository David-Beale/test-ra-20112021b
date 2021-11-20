import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const favouritesAdapter = createEntityAdapter();

export const initialState = favouritesAdapter.getInitialState({
  open: false,
});

const favourites = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleOpen(state) {
      state.open = !state.open;
    },
    addFavourite(state, action) {
      favouritesAdapter.addOne(state, action.payload);
    },
    removeFavourite(state, action) {
      favouritesAdapter.removeOne(state, action.payload);
    },
  },
});

export const { toggleOpen, addFavourite, removeFavourite } = favourites.actions;

export const {
  selectById: selectFavouriteById,
  selectIds: selectFavouriteIds,
} = favouritesAdapter.getSelectors((state) => state.favourites);

export default favourites.reducer;

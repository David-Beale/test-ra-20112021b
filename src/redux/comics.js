import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { MarvelApi } from "../Api/MarvelApi";

const comicsAdapter = createEntityAdapter();

let lastVisible = 0;
let loading;

export const initialState = comicsAdapter.getInitialState({
  error: false,
  finished: false,
});

const comics = createSlice({
  name: "comics",
  initialState,
  reducers: {
    addComics(state, action) {
      comicsAdapter.addMany(state, action.payload);
    },
    setError(state) {
      state.error = true;
    },
    setFinished(state) {
      state.finished = true;
    },
  },
});

export const { addComics, setError, setFinished } = comics.actions;

export const { selectById: selectComicById, selectIds: selectComicsIds } =
  comicsAdapter.getSelectors((state) => state.comics);

export default comics.reducer;

export const fetchComics = () => async (dispatch) => {
  if (loading) return;
  loading = true;
  const { comics, error } = await MarvelApi.fetchComics(lastVisible);
  loading = false;
  if (error) {
    dispatch(setError);
    return;
  }
  lastVisible += comics.length;
  if (comics.length < 20) {
    dispatch(setFinished());
  }
  dispatch(addComics(comics));
};

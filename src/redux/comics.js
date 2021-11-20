import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { MarvelApi } from "../Api/MarvelApi";

const comicsAdapter = createEntityAdapter();

export const initialState = comicsAdapter.getInitialState({
  loading: false,
  error: false,
});

const comics = createSlice({
  name: "comics",
  initialState,
  reducers: {
    addComics(state, action) {
      comicsAdapter.addMany(state, action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state) {
      state.error = true;
    },
  },
});

export const { addComics, setError, setLoading } = comics.actions;

export const { selectById: selectComicById, selectIds: selectComicsIds } =
  comicsAdapter.getSelectors((state) => state.comics);

export default comics.reducer;

export const fetchComics = () => async (dispatch) => {
  dispatch(setLoading(true));
  const { comics, error } = await MarvelApi.fetchComics();
  if (error) {
    dispatch(setError);
    return;
  }
  dispatch(setLoading(false));
  dispatch(addComics(comics));
};

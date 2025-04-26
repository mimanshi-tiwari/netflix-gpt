import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    nowPlayingTrailer: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies[action.payload.theme] = action.payload.movies ;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const { addNowPlayingTrailer, addMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;

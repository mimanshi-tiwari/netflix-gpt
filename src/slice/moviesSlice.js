import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    nowPlaying: [],
    nowPlayingTrailer: [],
    popular: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies[action.payload.theme] = action.payload.movies ;
    },
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { addNowPlaying, addNowPlayingTrailer, addPopular, addMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    nowPlayingTrailer: [],
    movieDetails: {},
  },
  reducers: {
    addMovies: (state, action) => {
      const { theme, movies } = action.payload
      state.movies[theme] = movies ;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addMovieDetails: (state, action) => {
      const { movieId, movieDetails} = action.payload
      state.movieDetails[movieId] = movieDetails
    }
  },
});

export const { addNowPlayingTrailer, addMovies, addMovieDetails } =
  moviesSlice.actions;
export default moviesSlice.reducer;

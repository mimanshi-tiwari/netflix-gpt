import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovies: [],
    gptMovieNames: [],
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = action.payload;
    },
    addGptSearchResults: (state, action) => {
      const { movieNames, tmdbResults } = action.payload;
      state.gptMovies = tmdbResults;
      state.gptMovieNames = movieNames;
    },
  },
});

export const { toggleGPTSearch, addGptSearchResults } = gptSlice.actions;
export default gptSlice.reducer;

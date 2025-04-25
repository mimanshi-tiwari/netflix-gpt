import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    nowPlayingTrailer: [],
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
        state.nowPlayingTrailer = action.payload
    }
  },
});

export const { addNowPlaying, addNowPlayingTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;

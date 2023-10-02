import { createSlice } from "@reduxjs/toolkit";

export const SongsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
    error: "" || null,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getSongsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    createSongFetch: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createSongSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    createSongFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateSongFetch: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    updateSongFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteSongFetch: (state) => {
      state.error = null;
    },
    deleteSongSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    deleteSongFailure: (state) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  deleteSongFetch,
  deleteSongSuccess,
  deleteSongFailure,
  createSongFetch,
  createSongSuccess,
  createSongFailure,
  updateSongFetch,
  updateSongSuccess,
  updateSongFailure,
} = SongsSlice.actions;

export default SongsSlice.reducer;

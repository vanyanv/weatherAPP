import { configureStore } from '@reduxjs/toolkit';
import lastMovie from './lastMovieSlice';

const store = configureStore({
  reducer: {
    lastMovie,
  },
});

export default store;

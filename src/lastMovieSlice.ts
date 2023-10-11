import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from './ApiResponsesTypes';

interface LastMovieState {
  value: MovieType[];
}

export const lastMovieSlice = createSlice({
  name: 'lastMovie',
  initialState: {
    value: [],
  } as LastMovieState,
  reducers: {
    setLastMovie: (state, action: PayloadAction<MovieType>) => {
      if (state.value.length >= 4) {
        const newState = [...state.value];
        newState.shift();
        newState.push(action.payload);
        state.value = newState;
      } else {
        const newState = [...state.value, action.payload];
        state.value = newState;
      }
    },
  },
});

export const { setLastMovie } = lastMovieSlice.actions;
export default lastMovieSlice.reducer;

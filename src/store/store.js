import { configureStore } from '@reduxjs/toolkit';
import mapSearchSlice from './mapSearchSlice';

export const store = configureStore({
  reducer: {
    map: mapSearchSlice,
  },
});

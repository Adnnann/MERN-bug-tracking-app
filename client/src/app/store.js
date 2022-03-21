import { configureStore } from '@reduxjs/toolkit';
import bugsReducer from '../features/bugsSlice'

export const store = configureStore({
  reducer: {
    bugs: bugsReducer,
  },
});

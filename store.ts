// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { api } from './service/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mapSlice } from '@pages/map';

export const store = configureStore({
  reducer: combineReducers({
    [mapSlice.name]: mapSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import TextReducer from '../features/Text/textSlice';

export const store = configureStore({
  reducer: {
    text:TextReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

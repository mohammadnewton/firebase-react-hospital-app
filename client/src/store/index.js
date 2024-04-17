import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})
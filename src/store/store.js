import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatReducer';

export default configureStore({
  reducer: {
    chat: chatReducer,
  },
})
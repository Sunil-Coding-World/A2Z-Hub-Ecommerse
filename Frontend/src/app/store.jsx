import { configureStore } from '@reduxjs/toolkit';
import productreducer from '../features/Product/ProductListSlice';
import authreducer from '../features/auth/authSlice';
export const store = configureStore({
  reducer: {
    app: productreducer,
    auth : authreducer
  },
});
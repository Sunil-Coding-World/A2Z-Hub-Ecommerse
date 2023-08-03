import { configureStore } from '@reduxjs/toolkit';
import productreducer from '../features/Product/ProductListSlice';
import authreducer from '../features/auth/authSlice';
import cartreducer from '../features/Cart/CartSlice';
import orderSlice from '../features/order/OrderSlice';
export const store = configureStore({
  reducer: {
    app: productreducer,
    auth: authreducer,
    cart: cartreducer,
    order: orderSlice
  }
});
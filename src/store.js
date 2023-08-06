import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  }
})

export default store;
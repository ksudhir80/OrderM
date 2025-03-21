import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './features/customer/customerSlice';
import productsReducer from './features/product/productSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  customers: customersReducer,
  products: productsReducer,
})

const store = configureStore({
  reducer:rootReducer
});

export default store;

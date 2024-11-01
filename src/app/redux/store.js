import { configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefault) => {
    return getDefault().concat(thunk)
  }
});

export default store;

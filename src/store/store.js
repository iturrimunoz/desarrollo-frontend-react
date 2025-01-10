import counterReducer from './features/counter/counterSlice.js';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    
  },
});

export default store;

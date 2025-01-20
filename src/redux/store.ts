import { configureStore } from '@reduxjs/toolkit';
import projectPageReducer from './reducers/projectPageSlice';  // Example slice
import loaderReducer from "./reducers/loaderSlice";

export const store = configureStore({
  reducer: {
    projectPage: projectPageReducer,
    loader:loaderReducer
  },
});

export default store;

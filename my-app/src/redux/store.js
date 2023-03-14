import { combineReducers, configureStore } from "@reduxjs/toolkit";
import convertSliceReducer from "./slices/convert";

export const store = configureStore({
  reducer: combineReducers({
    convert: convertSliceReducer,
  }),
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  base: "USD",
  target: "PKR",
  endDate: "",
};

const convertSlice = createSlice({
  name: "convert",
  initialState,

  reducers: {
    updateBase(state, action) {
      state.base = action.payload;
    },
    updateTarget(state, action) {
      state.target = action.payload;
    },
    toggleCurrency(state, action) {
      let temp = state.base;
      state.base = state.target;
      state.target = temp;
    },
  },
});
export const { updateBase, updateTarget, toggleCurrency } =
  convertSlice.actions;
export default convertSlice.reducer;

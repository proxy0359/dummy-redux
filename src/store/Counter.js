import { createSlice } from "@reduxjs/toolkit";
const counterState = {
  value: 0,
  showCounter: true,
};

const counterHandler = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterHandler.actions;

export default counterHandler;

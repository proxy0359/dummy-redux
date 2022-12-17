import { createSlice, configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";
import Auth from "./Auth";

const Store = configureStore({
  reducer: { counter: Counter.reducer, auth: Auth.reducer },
});

export default Store;

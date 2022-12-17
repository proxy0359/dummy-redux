import { createSlice } from "@reduxjs/toolkit";
const authState = {
  isLogin: false,
};

const authHandler = createSlice({
  name: "authentication",
  initialState: authState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authAction = authHandler.actions;

export default authHandler;

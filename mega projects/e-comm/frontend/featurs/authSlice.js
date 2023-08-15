import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userinfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userinfo = null;
      localStorage.removeItem("userInfo");
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

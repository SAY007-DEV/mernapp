import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userEmail: null,
    userName: null,
  },
  reducers: {
    loggedin: (state, action) => {
      const { userEmail, userName } = action.payload; 
      state.userEmail = userEmail;
      state.userName = userName;
    },
    loggedout: (state) => {
      state.userEmail = null;
      state.userName = null;
    },
  },
});

export const { loggedin, loggedout } = authSlice.actions;
export default authSlice.reducer;

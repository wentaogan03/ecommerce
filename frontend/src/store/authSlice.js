import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    }
  },
});

export default authSlice.reducer;

export const { setUser, setIsAuthenticated } = authSlice.actions;
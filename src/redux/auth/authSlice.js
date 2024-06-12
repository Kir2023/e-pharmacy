import { loginThunk, logOutThunk } from "./authOperations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  userData: { name: "", email: "", avatarURL: "", id: "" },
  isLoading: false,
  error: null,
  registerError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
        localStorage.setItem("token", payload.token);
      })
      .addCase(logOutThunk.fulfilled, () => {
        localStorage.removeItem("token");
        return initialState;
      })
      .addCase(logOutThunk.rejected, () => {
        localStorage.removeItem("token");
        return initialState;
      })
      .addMatcher(isAnyOf(loginThunk.pending, logOutThunk.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(loginThunk.rejected, logOutThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.token = null;
          localStorage.removeItem("token");
        }
      ),
});

export const authReducer = authSlice.reducer;
export const { clearToken } = authSlice.actions;

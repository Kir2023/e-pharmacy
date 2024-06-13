import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomers } from "./customersOperations";

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default customerSlice.reducer;

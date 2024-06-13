import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboard } from "./dashboardOperations";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    transactions: [],
    recentCustomers: [],
    totalProducts: 0,
    totalSuppliers: 0,
    totalCustomers: 0,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = action.payload.recentTransactions;
        state.recentCustomers = action.payload.recentCustomers;
        state.totalProducts = action.payload.totalProducts;
        state.totalSuppliers = action.payload.totalSuppliers;
        state.totalCustomers = action.payload.totalCustomers;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;

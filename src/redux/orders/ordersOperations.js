import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";

export const fetchOrders = createAsyncThunk(
  "orders/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await instance.get("/orders");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

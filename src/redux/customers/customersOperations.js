import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";

export const fetchCustomers = createAsyncThunk(
  "customers/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await instance.get("/customers");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

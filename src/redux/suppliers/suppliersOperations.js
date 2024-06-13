import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";
import { format } from "date-fns";

export const fetchSuppliers = createAsyncThunk(
  "suppliers/fetchSuppliers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/suppliers");
      const formattedSuppliers = response.data.map((supplier) => ({
        ...supplier,
        date: format(new Date(supplier.date), "MMMM dd, yyyy"),
      }));
      return formattedSuppliers;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addSupplier = createAsyncThunk(
  "suppliers/addSupplier",
  async (newSupplier, { rejectWithValue }) => {
    try {
      const response = await instance.post("/suppliers", newSupplier);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSupplier = createAsyncThunk(
  "suppliers/updateSupplier",
  async (updatedSupplier, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `/suppliers/${updatedSupplier._id}`,
        updatedSupplier
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

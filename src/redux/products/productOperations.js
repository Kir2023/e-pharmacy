import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await instance.get("/products");
      return response.data.products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async (newProduct, thunkApi) => {
    try {
      const response = await instance.post("/products", newProduct);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async (editedProduct, thunkApi) => {
    try {
      const response = await instance.put(
        `/products/${editedProduct._id}`,
        editedProduct
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id, thunkApi) => {
    try {
      await instance.delete(`/products/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

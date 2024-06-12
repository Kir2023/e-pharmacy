import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const cleanAuthToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/user/login", formData);
      setToken(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/user/logout");
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    } finally {
      cleanAuthToken();
    }
  }
);

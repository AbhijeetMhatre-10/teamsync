import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/user",
  async (credentials, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const currentLoggedEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      const result = await axiosInstance.get("/auth/me");
      return result.data.user;
    } catch (error) {
      console.log("Error in auth/me", error);
      return thunkApi.rejectWithValue(error);
    }
  },
);

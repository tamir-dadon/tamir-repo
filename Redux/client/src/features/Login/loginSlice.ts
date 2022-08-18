import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface Login {
  value: String;
  status: "idle" | "loading" | "failed";
}
const initialState: Login = {
  value: "",
  status: "idle",
};

export const Loginlice = createSlice({
    name: "Login",
    initialState,
  
    reducers: {
      setText: (state, action: PayloadAction<string>) => {
        ;     
      },
    },
  });
  

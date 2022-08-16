import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface TextState {
  value: String;
  status: "idle" | "loading" | "failed";
}

const initialState: TextState = {
  value: "",
  status: "idle",
};

export const TextSlice = createSlice({
  name: "Text",
  initialState,

  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = TextSlice.actions;


export const selectText = (state: RootState) => state.text.value;


export default TextSlice.reducer;

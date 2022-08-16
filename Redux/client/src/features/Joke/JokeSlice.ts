import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface JokeState {
  value: String;
  status: "idle" | "loading" | "failed";
}

const initialState: JokeState = {
  value: "",
  status: "idle",
};

export const JokeSlice = createSlice({
  name: "Joke",
  initialState,

  reducers: {
    setJoke: (state, action: PayloadAction<String>) => {
      state.value = action.payload;
    },
  },
});

export const { setJoke } = JokeSlice.actions;

export const selectJoke = (state: RootState) => state.Joke.value;

export default JokeSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

// הגדרה ראשונית של מה שנקבל מהמשתמש
export interface TextState {
  value: String;
  status: "idle" | "loading" | "failed";
}
// כאן מגדירים את הערך של הסטייט כאן בדוגמא הוא תמיד יהיה ריק בהתחלה
const initialState: TextState = {
  value: "",
  status: "idle",
};

export const TextSlice = createSlice({
  name: "Text", // השם של השינוי שיופיע בטולקיט 
  initialState, // הערך הראשוני של הטקסט

  //מספר 3, בררגע שיש לנו את הערך של אקשן
  // אנו עושים השוואה בין מה השהיה למה שנכנס חדש
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;     
    },
  },
});

//יצוא של הפונקציה שעושה את הפעולה של שינוי הערך של הטקסט למעלה
export const { setText } = TextSlice.actions;

//מספר 4, כאן כבר קיבלנו שם חדש ואותו אנו שולחים בחזרה 
export const selectText = (state: RootState) => state.text.value;


export default TextSlice.reducer;

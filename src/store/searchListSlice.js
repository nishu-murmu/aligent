import { createSlice } from "@reduxjs/toolkit";

const initialState = { url: "", heading: "Movie/Series Title", year: 0 };
const searchListSlice = createSlice({
  name: "searchList",
  initialState,
});

export const searchListActions = searchListSlice.actions;
export default searchListSlice;

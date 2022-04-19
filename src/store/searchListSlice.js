import { createSlice } from "@reduxjs/toolkit";

const initialState = { url: "", heading: "", year: 2022 };
const searchListSlice = createSlice({
  name: "searchList",
  initialState,
  reducers: {
    displayList(state) {
      state.list--;
    },
  },
});

export const searchListActions = searchListSlice.actions;
export default searchListSlice;

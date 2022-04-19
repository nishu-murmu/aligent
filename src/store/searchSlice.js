import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state) {
      state.value = state.value + " Murmu";
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;

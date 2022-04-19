import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = { value: "nishu" };

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    search(state) {
      state.value = state.value + " Murmu";
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;

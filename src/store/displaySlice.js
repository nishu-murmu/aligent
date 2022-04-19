import { createSlice } from "@reduxjs/toolkit";

const initialState = { display: "" };
const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    display(state) {
      state.display = state.display + "fine";
    },
  },
});

export const displayActions = displaySlice.actions;
export default displaySlice;

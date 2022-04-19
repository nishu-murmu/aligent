import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice.js";
import displaySlice from "./displaySlice.js";

const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;

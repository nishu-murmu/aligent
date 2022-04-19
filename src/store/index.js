import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice.js";
import displaySlice from "./displaySlice.js";
import searchListSlice from "./searchListSlice";

const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
    search: searchSlice.reducer,
    searchList: searchListSlice.reducer,
  },
});

export default store;

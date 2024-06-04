import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookshelfSlice";
const appStore = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default appStore;

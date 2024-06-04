import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem("myBookShelf");
  if (serializedState === null) {
    return [];
  }
  return JSON.parse(serializedState);
};

const saveToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("myBookShelf", serializedState);
};

const initialState = {
  myBookShelf: loadFromLocalStorage(),
  viewBook: true,
};

const bookshelfSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.myBookShelf.push(action.payload);
      saveToLocalStorage(state.myBookShelf);
    },
    setViewBookOn: (state) => {
      state.viewBook = true;
    },
    setViewBookOff: (state) => {
      state.viewBook = false;
    },
  },
});

export const { addBooks, setViewBookOff, setViewBookOn } = bookshelfSlice.actions;
export default bookshelfSlice.reducer;

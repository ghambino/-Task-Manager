import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./src/redux/reducers/boardReducer";
import { data } from "./preloadData";

const preloadData = data.boards ?? [];

console.log(preloadData);

const store = configureStore({
  reducer: {
    boards: boardReducer,
  },
  preloadedState: {
    boards: preloadData,
  },
});

export default store;

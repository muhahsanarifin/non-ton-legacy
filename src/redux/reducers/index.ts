import { combineReducers } from "@reduxjs/toolkit";
import contentsSlice from "./content";

export default combineReducers({
  contents: contentsSlice,
});

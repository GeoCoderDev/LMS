import { combineReducers } from "redux";
import sidebarIsOpenSlice from "./sidebarIsOpen";
import showResultsSlice from "./showResults";

const flags = combineReducers({
  sidebarIsOpen: sidebarIsOpenSlice,
  showResults: showResultsSlice,
});

export default flags;

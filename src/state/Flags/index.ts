import { combineReducers } from "redux";
import sidebarIsOpenSlice from "./sidebarIsOpen";
import showResultsSlice from "./showResults";
import showFooterSlice from "./showFooter";

const flags = combineReducers({
  sidebarIsOpen: sidebarIsOpenSlice,
  showResults: showResultsSlice,
  showFooter: showFooterSlice,
});

export default flags;

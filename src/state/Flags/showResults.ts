import { ReduxPayload } from "@/interfaces/ReducersPayload";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

const showResultsSlice = createSlice({
  name: "sidebarIsOpened",
  initialState,
  reducers: {
    setShowResults(state, action: PayloadAction<ReduxPayload<boolean>>) {
      return action.payload.value;
    },
  },
});

const { setShowResults } = showResultsSlice.actions;

export { setShowResults };
export default showResultsSlice.reducer;

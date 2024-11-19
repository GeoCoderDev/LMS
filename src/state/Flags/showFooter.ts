import { ReduxPayload } from "@/interfaces/ReducersPayload";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = true;

const showFooterSlice = createSlice({
  name: "showFooter",
  initialState,
  reducers: {
    setShowFooter(state, action: PayloadAction<ReduxPayload<boolean>>) {
      return action.payload.value;
    },
  },
});

const { setShowFooter } = showFooterSlice.actions;

export { setShowFooter };
export default showFooterSlice.reducer;

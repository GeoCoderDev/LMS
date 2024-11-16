import { ReduxPayload } from "@/interfaces/ReducersPayload";
import { SubseccionSearchResult } from "@/lib/assets/ContenidoHelpers";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SubseccionSearchResult[] = [];

const searcherResultsSlice = createSlice({
  name: "commandVoicesState",
  initialState,
  reducers: {
    setSearcherResults(
      state,
      action: PayloadAction<ReduxPayload<SubseccionSearchResult[]>>
    ) {
      return action.payload.value;
    },
  },
});

const { setSearcherResults } = searcherResultsSlice.actions;

export { setSearcherResults };
export default searcherResultsSlice.reducer;

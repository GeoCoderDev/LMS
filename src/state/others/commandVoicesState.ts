import { ReduxPayload } from "@/interfaces/ReducersPayload";
import { CommandVoicesStates } from "@/lib/interfaces/CommandVoicesState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = CommandVoicesStates.IDLE;

const commandVoicesStateSlice = createSlice({
  name: "commandVoicesState",
  initialState,
  reducers: {
    setCommandVoicesState(
      state,
      action: PayloadAction<ReduxPayload<CommandVoicesStates>>
    ) {
      return action.payload.value;
    },
  },
});

const { setCommandVoicesState } = commandVoicesStateSlice.actions;

export { setCommandVoicesState };
export default commandVoicesStateSlice.reducer;

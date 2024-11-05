import { combineReducers } from "redux";
import commandVoicesStateSlice from './commandVoicesState';



const others = combineReducers({
    commandVoicesState: commandVoicesStateSlice
});

export default others;

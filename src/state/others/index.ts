import { combineReducers } from "redux";
import commandVoicesStateSlice from './commandVoicesState';
import searcherResultsSlice from './searcherResults';



const others = combineReducers({
    commandVoicesState: commandVoicesStateSlice,
    searcherResults: searcherResultsSlice
});

export default others;

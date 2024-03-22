import { combineReducers } from "redux";
import FormReducer from "./FormReducer";

const RootReducer = combineReducers({
    showForm: FormReducer,
});

export default RootReducer;
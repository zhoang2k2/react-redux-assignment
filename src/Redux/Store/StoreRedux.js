import { createStore } from "redux";
import RootReducer from "../Reducer/RootReducer";

const storeRedux = createStore(RootReducer)

export default storeRedux;
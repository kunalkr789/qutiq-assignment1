import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import DetailsReducer from "./DetailsReducer";

const RootReducer = combineReducers({
  List: ListReducer,
  Details: DetailsReducer,
});

export default RootReducer;

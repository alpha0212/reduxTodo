import { countReducer } from "./countReducer";
import { todoReducers } from "./todoReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todoReducers,
});
export const RootCountReducer = combineReducers({
  countReducer,
});

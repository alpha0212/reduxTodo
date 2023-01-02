import { createStore } from "redux";
import { RootCountReducer, rootReducer } from "./reducers";

export const store = createStore(rootReducer);
export const countStore = createStore(RootCountReducer);

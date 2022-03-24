import { combineReducers, createStore } from "redux";
import { Fibonacci } from "./reducers/Fibonacci";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      fibonacci: Fibonacci
    }),
   );

  return store;
};

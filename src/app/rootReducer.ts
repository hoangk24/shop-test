import { combineReducers } from "redux";
import example from "features/example/exampleSlice";

const rootReducer = combineReducers({
  example,
});

export default rootReducer;

import { combineReducers } from "redux";
import { exerciseReducer } from "./exerciseReducer";

export const reducers = combineReducers({
  allExercise: exerciseReducer,
});

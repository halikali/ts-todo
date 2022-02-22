import { combineReducers } from "redux";

import todoReducer from "./reducers/todoReducer";
import filterReducer from "./reducers/filterReducer";
import inputReducer from "./reducers/inputReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
  inputReducer,
  searchReducer,
});

export default rootReducer;

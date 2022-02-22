import { combineReducers } from "redux";

import todoReducer from "./reducers/todoReducer";
import filterReducer from "./reducers/filterReducer";
import inputReducer from "./reducers/inputReducer";
import searchReducer from "./reducers/searchReducer";
import counterReducer from "./reducers/countReducer";

const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
  inputReducer,
  searchReducer,
  counterReducer,
});

export default rootReducer;

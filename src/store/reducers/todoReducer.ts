import { TodoState } from "types/todoTypes";

const initialState = {
  todos: [],
  error: "",
  isLoad: false,
};

const todoReducer = (state: TodoState = initialState, action: any) => {
  switch (action.type) {
    case "GET_TODO_REQUEST":
      return { ...state, isLoad: false };

    case "GET_TODO_SUCCESS":
      return { ...state, todos: action.payload, isLoad: true };

    case "GET_TODO_FAILURE":
      return { ...state, error: action.error, isLoad: false };

    default:
      return state;
  }
};

export default todoReducer;

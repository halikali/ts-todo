import { InputAction } from "types/inputTypes";

const initialState = {
  type: "add",
};

const inputReducer = (state = initialState, action: InputAction) => {
  switch (action.type) {
    case "SET_INPUT_TYPE":
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export default inputReducer;

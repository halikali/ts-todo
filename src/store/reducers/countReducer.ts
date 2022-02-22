const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default counterReducer;

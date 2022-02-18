const initialState = {
  searchText: "",
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

export default searchReducer;

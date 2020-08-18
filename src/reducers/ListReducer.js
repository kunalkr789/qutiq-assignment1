const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const ListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get list",
      };
    case "LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default ListReducer;

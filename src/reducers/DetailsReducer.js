const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const DetailsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "DETAILS_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "DETAILS_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find",
      };
    case "DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          user: action.payload,
        },
      };
    default:
      return state;
  }
};

export default DetailsReducer;

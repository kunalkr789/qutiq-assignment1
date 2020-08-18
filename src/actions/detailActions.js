import axios from "axios";

export const GetList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "LIST_LOADING",
    });
    const result = await axios.get("https://reqres.in/api/users?page=1");

    dispatch({
      type: "LIST_SUCCESS",
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: "LIST_FAIL",
    });
  }
};

export const GetDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DETAILS_LOADING",
    });
    const result = await axios.get("https://reqres.in/api/users?page=1");
    dispatch({
      type: "DETAILS_SUCCESS",
      payload: result.data.data[id - 1],
    });
  } catch (error) {
    dispatch({
      type: "DETAILS_FAIL",
    });
  }
};

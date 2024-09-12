import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "../type/user.type";

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (data) => {
  return {
    type: USER_SUCCESS,
    payload: data,
  };
};

export const userFailure = (error) => {
  return {
    type: USER_FAILURE,
    payload: error,
  };
};

export const user = (token) => {
  return async (dispatch) => {
    dispatch(userRequest());
    await fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(async (response) => await response.json())
      .then((data) => dispatch(userSuccess(data?.data)))
      .catch((error) => dispatch(userFailure(error)));
  };
};

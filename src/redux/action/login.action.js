import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../type/login.type";
import { user } from "./user.action";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const loginInitAction = (formData) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    await fetch("https://reqres.in/api/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        dispatch(loginSuccess(data?.token));
        dispatch(user(data?.token));
      })
      .catch((error) => loginError(error));
  };
};

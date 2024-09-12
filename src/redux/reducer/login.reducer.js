import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./../type/login.type";

export const intialState = {
  token: {},
  loading: false,
  success: false,
  error: "",
};

export const loginReducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: "" };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        success: true,
        error: "",
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

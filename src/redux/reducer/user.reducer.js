import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "../type/user.type";

export const initialState = {
  loading: false,
  success: false,
  error: "",
  data: {},
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REQUEST:
      return { ...state, loading: true, success: false };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: payload,
        error: "",
      };
    case USER_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { loginReducer } from "../reducer/login.reducer";
import { userReducer } from "../reducer/user.reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer
})
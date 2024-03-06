import { combineReducers } from "redux";
import authReducer from "./authSlice";
import userReducer from "./userSlice";

export default combineReducers ({
    auth: authReducer,
    user: userReducer,
});
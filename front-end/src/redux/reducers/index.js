import { combineReducers } from "redux";
import authReducer from "./authSlice";
import userReducer from "./userReducer";

export default combineReducers ({
    auth: authReducer,
    user: userReducer,
});
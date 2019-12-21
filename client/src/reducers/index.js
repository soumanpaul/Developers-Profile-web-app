import { combineReducers } from "redux";
import alert from "./alart";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({ alert, auth, profile });

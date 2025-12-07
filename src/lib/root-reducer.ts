import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import commentReducer from "./features/comment/comment.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentReducer,
})

export default rootReducer;
import { combineReducers } from "redux"
import { catalogReducer } from "./catalog"
import { profileReducer } from "./profile"

export default combineReducers({catalogReducer, profileReducer})
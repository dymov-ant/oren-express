import { combineReducers } from "redux"
import { catalogReducer } from "./catalog"
import { profileReducer } from "./profile"
import { appReducer } from "./app"

export default combineReducers({catalogReducer, profileReducer, appReducer})
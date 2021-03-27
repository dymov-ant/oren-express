import { combineReducers } from "redux"
import { catalogReducer } from "./catalog"
import { profileReducer } from "./profile"
import { appReducer } from "./app"
import { productReducer } from "./product"

export default combineReducers({catalogReducer, profileReducer, appReducer, productReducer})
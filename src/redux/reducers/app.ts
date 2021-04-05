import { AppActionTypes, IMessage } from "../../types/appTypes"
import { SET_INITIALIZED, SET_IS_LOADING, SET_MESSAGE } from "../../utilits/constants"

interface IAppState {
  isInitialized: boolean
  message: IMessage | null
  isLoading: boolean
}

const initialState: IAppState = {
  isInitialized: false,
  message: null,
  isLoading: false
}

export const appReducer = (state = initialState, action: AppActionTypes): IAppState => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInitialized: action.isInitialized
      }
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}
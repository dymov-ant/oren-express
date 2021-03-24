import { IMessage, ISetInitialized, ISetMessage } from "../../types/appTypes"
import { ACCESS_TOKEN, SET_INITIALIZED, SET_MESSAGE } from "../../utilits/constants"
import { Dispatch } from "redux"
import { IUser } from "../../types/profileTypes"
import jwtDecode from "jwt-decode"
import { setUser } from "./profile"

export const setMessage = (message: IMessage | null): ISetMessage => ({
  type: SET_MESSAGE,
  message
})

const setInitialized = (isInitialized: boolean): ISetInitialized => ({
  type: SET_INITIALIZED,
  isInitialized
})

export const initialization = () => (dispatch: Dispatch) => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
    const decoded: IUser = jwtDecode(token)
    dispatch(setUser(decoded))
  }
  dispatch(setInitialized(true))
}
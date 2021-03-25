import { IMessage, ISetInitialized, ISetMessage } from "../../types/appTypes"
import { ACCESS_TOKEN, SET_INITIALIZED, SET_MESSAGE } from "../../utilits/constants"
import { IUser } from "../../types/profileTypes"
import jwtDecode from "jwt-decode"
import { setUser } from "./profile"
import { getCatalog } from "./catalog"

export const setMessage = (message: IMessage | null): ISetMessage => ({
  type: SET_MESSAGE,
  message
})

const setInitialized = (isInitialized: boolean): ISetInitialized => ({
  type: SET_INITIALIZED,
  isInitialized
})

export const initialization = () => async (dispatch: any) => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
    const decoded: IUser = jwtDecode(token)
    dispatch(setUser(decoded))
  }
  await dispatch(getCatalog())
  dispatch(setInitialized(true))
}
import { IMessage, ISetInitialized, ISetIsLoading, ISetMessage } from "../../types/appTypes"
import { ACCESS_TOKEN, SET_INITIALIZED, SET_IS_LOADING, SET_MESSAGE } from "../../utilits/constants"
import { getUserData } from "./profile"
import { getCatalog } from "./catalog"

export const setMessage = (message: IMessage | null): ISetMessage => ({
  type: SET_MESSAGE,
  message
})

const setInitialized = (isInitialized: boolean): ISetInitialized => ({
  type: SET_INITIALIZED,
  isInitialized
})

export const setIsLoading = (isLoading: boolean): ISetIsLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

export const initialization = () => async (dispatch: any) => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
    await dispatch(getUserData())
  }
  await dispatch(getCatalog())
  dispatch(setInitialized(true))
}
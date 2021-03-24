import { IMessage, ISetInitialized, ISetMessage } from "../../types/appTypes"
import { SET_INITIALIZED, SET_MESSAGE } from "../../utilits/constants"

export const setMessage = (message: IMessage | null): ISetMessage => ({
  type: SET_MESSAGE,
  message
})

const setInitialized = (isInitialized: boolean): ISetInitialized => ({
  type: SET_INITIALIZED,
  isInitialized
})

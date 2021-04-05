import { SET_INITIALIZED, SET_IS_LOADING, SET_MESSAGE } from "../utilits/constants"

export interface IMessage {
  type: "success" | "error"
  body: string
}

export interface ISetMessage {
  type: typeof SET_MESSAGE
  message: IMessage | null
}

export interface ISetInitialized {
  type: typeof SET_INITIALIZED
  isInitialized: boolean
}

export interface ISetIsLoading {
  type: typeof SET_IS_LOADING
  isLoading: boolean
}

export type AppActionTypes = ISetMessage | ISetInitialized | ISetIsLoading
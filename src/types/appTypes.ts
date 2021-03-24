import { SET_INITIALIZED, SET_MESSAGE } from "../utilits/constants"

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

export type AppActionTypes = ISetMessage | ISetInitialized
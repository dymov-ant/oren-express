import { SET_USER } from "../utilits/constants"

export interface IUser {
  id?: number
  name: string
  email: string
}

export interface ISetUser {
  type: typeof SET_USER
  payload: IUser | null
}


export type ProfileActionsType = ISetUser
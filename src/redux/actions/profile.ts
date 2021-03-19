import { ISetUser, IUser } from "../../types/profileTypes"
import { SET_USER } from "../../utilits/constants"

export const setUser = (user: IUser | null): ISetUser => ({
  type: SET_USER,
  payload: user
})
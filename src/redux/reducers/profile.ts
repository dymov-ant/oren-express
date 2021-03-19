import { IUser, ProfileActionsType } from "../../types/profileTypes"
import { SET_USER } from "../../utilits/constants"

interface IProfileState {
  isAuthenticated: boolean
  user: IUser | null
}

const initialState: IProfileState = {
  isAuthenticated: false,
  user: null
}

export const profileReducer = (state = initialState, action: ProfileActionsType): IProfileState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        user: action.payload
      }
    default:
      return state
  }
}
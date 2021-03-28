import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { ISetUser, IUser, ProfileActionsType } from "../../types/profileTypes"
import { ACCESS_TOKEN, SET_USER } from "../../utilits/constants"
import { StateType } from "../store"
import { ILoginData, IRegisterData } from "../../types/authTypes"
import authAPI from "../../utilits/api/authAPI"
import profileAPI from "../../utilits/api/profileAPI"

export const setUser = (user: IUser | null): ISetUser => ({
  type: SET_USER,
  payload: user
})

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem(ACCESS_TOKEN)
  dispatch(setUser(null))
}

type ProfileThunkType = ThunkAction<Promise<void>, StateType, unknown, ProfileActionsType>

export const register = (registerData: IRegisterData): ProfileThunkType => async dispatch => {
  try {
    const response = await authAPI.register(registerData)
    if (response.status === 201) {
      const {token} = response.data
      localStorage.setItem(ACCESS_TOKEN, token)
      await dispatch(getUserData())
    }
  } catch (e) {
    console.log(e.response)
  }
}

export const login = (loginData: ILoginData): ProfileThunkType => async dispatch => {
  try {
    const response = await authAPI.login(loginData)
    if (response.status === 200) {
      const {token} = response.data
      localStorage.setItem(ACCESS_TOKEN, token)
      await dispatch(getUserData())
    }
  } catch (e) {
    console.log(e.response)
  }
}

export const getUserData = (): ProfileThunkType => async dispatch => {
  try {
    const response = await profileAPI.getUserData()
    if (response.status === 200) {
      dispatch(setUser({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email
      }))
    }
  } catch (e) {
    console.log(e.response)
  }
}
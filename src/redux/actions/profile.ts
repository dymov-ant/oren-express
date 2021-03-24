import { ThunkAction } from "redux-thunk"
import { ISetUser, IUser, ProfileActionsType } from "../../types/profileTypes"
import { ACCESS_TOKEN, SET_USER } from "../../utilits/constants"
import { StateType } from "../store"
import { ILoginData, IRegisterData } from "../../types/authTypes"
import authAPI from "../../utilits/api/authAPI"
import jwtDecode from "jwt-decode"

export const setUser = (user: IUser | null): ISetUser => ({
  type: SET_USER,
  payload: user
})

type ProfileThunkType = ThunkAction<Promise<void>, StateType, unknown, ProfileActionsType>

export const register = (registerData: IRegisterData): ProfileThunkType => async dispatch => {
  try {
    const response = await authAPI.register(registerData)
    // todo нужно будет поменять статус на 201 когда Константин соизволит поправить бэк
    if (response.status === 200) {
      const {token} = response.data
      localStorage.setItem(ACCESS_TOKEN, token)
      const decoded = jwtDecode(token)
      console.log("decoded", decoded)
      // todo Константин не хочет делать получение данных о пользователе
      dispatch(setUser({
        id: 1,
        name: "userName"
      }))
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
      const decoded = jwtDecode(token)
      console.log("decoded", decoded)
      // todo Константин и тут не хочет делать получение данных о пользователе
      dispatch(setUser({
        id: 1,
        name: "userName"
      }))
    }
  } catch (e) {
    console.log(e.response)
  }
}
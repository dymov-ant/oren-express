import { ThunkAction } from "redux-thunk"
import { ISetUser, IUser, ProfileActionsType } from "../../types/profileTypes"
import { SET_USER } from "../../utilits/constants"
import { StateType } from "../store"
import { IRegisterData } from "../../types/authTypes"
import authAPI from "../../utilits/api/authAPI"

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
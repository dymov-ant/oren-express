import { api } from "./api"
import { ILoginData, IAuthResponse, IRegisterData } from "../../types/authTypes"
import { LOGIN_API_URL, REGISTRATION_API_URL } from "../constants"

const login = (loginData: ILoginData) => api.post<IAuthResponse>(LOGIN_API_URL, loginData)
const register = (registerData: IRegisterData) => api.post<IAuthResponse>(REGISTRATION_API_URL, registerData)

const authAPI = {login, register}

export default authAPI
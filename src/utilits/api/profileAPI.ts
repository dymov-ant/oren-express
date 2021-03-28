import { api } from "./api"
import { GET_USER_DATA_API_URL } from "../constants"
import { IUser } from "../../types/profileTypes"

const getUserData = () => api.get<IUser>(GET_USER_DATA_API_URL)

const profileAPI = {getUserData}

export default profileAPI
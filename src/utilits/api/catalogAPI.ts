import { api } from "./api"
import { ICatalogItem } from "../../types/catalogTypes"
import { CATALOG_API_URL } from "../constants"

const getCatalog = () => api.get<ICatalogItem[]>(CATALOG_API_URL)

const catalogAPI = {getCatalog}

export default catalogAPI
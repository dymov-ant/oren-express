import { api } from "./api"
import { CATALOG_API_URL } from "../constants"
import { ResponseOfGetProducts } from "../../types/productType"

const getProducts = (catalogId: number) => api.get<ResponseOfGetProducts>(`${CATALOG_API_URL}/${catalogId}`)

const productAPI = {getProducts}

export default productAPI
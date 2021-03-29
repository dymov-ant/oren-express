import { ThunkAction } from "redux-thunk"
import {
  IProduct,
  ISetLastViewedProducts,
  ISetProducts,
  ISetSelectedProduct,
  ISetTotalCountProduct,
  ProductActionTypes
} from "../../types/productType"
import {
  SET_LAST_VIEWED_PRODUCTS,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  SET_TOTAL_COUNT_PRODUCTS
} from "../../utilits/constants"
import { StateType } from "../store"
import productAPI from "../../utilits/api/productAPI"

export const setProducts = (products: IProduct[]): ISetProducts => ({
  type: SET_PRODUCTS,
  products
})

export const setTotalCountProducts = (count: number): ISetTotalCountProduct => ({
  type: SET_TOTAL_COUNT_PRODUCTS,
  count
})

export const setSelectedProduct = (productId: number): ISetSelectedProduct => ({
  type: SET_SELECTED_PRODUCT,
  productId
})

export const setLastViewedProducts = (products: IProduct[]): ISetLastViewedProducts => ({
  type: SET_LAST_VIEWED_PRODUCTS,
  products
})

type ProductThunkType = ThunkAction<Promise<void>, StateType, unknown, ProductActionTypes>

export const getProducts = (catalogId: number): ProductThunkType => async dispatch => {
  try {
    const response = await productAPI.getProducts(catalogId)
    if (response.status === 200) {
      dispatch(setTotalCountProducts(response.data.countProducts))
      dispatch(setProducts(response.data.data))
    }
  } catch (e) {

  }
}
import { ThunkAction } from "redux-thunk"
import { IProduct, ISetProducts, ISetTotalCountProduct, ProductActionTypes } from "../../types/productType"
import { SET_PRODUCTS, SET_TOTAL_COUNT_PRODUCTS } from "../../utilits/constants"
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

type ProductThunkType = ThunkAction<Promise<void>, StateType, unknown, ProductActionTypes>

export const getProducts = (catalogId: number): ProductThunkType => async dispatch => {
  try {
    const response = await productAPI.getProducts(catalogId)
    if (response.status === 200) {
      console.log(response.data)
      dispatch(setTotalCountProducts(response.data.countProducts))
      dispatch(setProducts(response.data.data))
    }
  } catch (e) {

  }
}
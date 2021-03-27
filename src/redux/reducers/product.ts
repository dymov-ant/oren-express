import { IProduct, ProductActionTypes } from "../../types/productType"
import { SET_PRODUCTS, SET_TOTAL_COUNT_PRODUCTS } from "../../utilits/constants"

interface IProductState {
  products: IProduct[]
  totalCountProducts: number
}

const initialState: IProductState = {
  products: [],
  totalCountProducts: 0
}

export const productReducer = (state = initialState, action: ProductActionTypes): IProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }
    case SET_TOTAL_COUNT_PRODUCTS:
      return {
        ...state,
        totalCountProducts: action.count
      }
    default:
      return state
  }
}
import { IProduct, ProductActionTypes } from "../../types/productType"
import {
  SET_LAST_VIEWED_PRODUCTS,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  SET_TOTAL_COUNT_PRODUCTS
} from "../../utilits/constants"

interface IProductState {
  products: IProduct[]
  totalCountProducts: number
  selectedProduct: IProduct | null
  lastViewedProducts: IProduct[]
}

const initialState: IProductState = {
  products: [],
  totalCountProducts: 0,
  selectedProduct: null,
  lastViewedProducts: []
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
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.find(product => product.id === action.productId) || null
      }
    case SET_LAST_VIEWED_PRODUCTS:
      return {
        ...state,
        lastViewedProducts: action.products
      }
    default:
      return state
  }
}
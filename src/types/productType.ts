import { SET_PRODUCTS, SET_TOTAL_COUNT_PRODUCTS } from "../utilits/constants"

export interface IProduct {
  id: number
  shop_id: number
  user_id: number
  category_id: number
  name: string
  description: string
  main_photo: string
  photos?: string
  price: number
  created_at: string
  updated_at: string
}

export interface ResponseOfGetProducts {
  countProducts: number
  data: IProduct[]
}

export interface ISetProducts {
  type: typeof SET_PRODUCTS
  products: IProduct[]
}

export interface ISetTotalCountProduct {
  type: typeof SET_TOTAL_COUNT_PRODUCTS
  count: number
}

export type ProductActionTypes = ISetProducts | ISetTotalCountProduct
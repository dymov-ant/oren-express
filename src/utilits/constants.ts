export const MAIN_ROUTE = "/"
export const LOGIN_ROUTE = "/login"
export const REGISTRATION_ROUTE = "/registration"
export const CART_ROUTE = "/cart"
export const SHOP_ROUTE = "/shop"
export const PRODUCT_ROUTE = "/product"
export const PROFILE_ROUTE = "/profile"
export const CATALOG_ROUTE = "/catalog"

export let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const TOGGLE_CATALOG = "catalog/TOGGLE_CATALOG"
export const SET_ACTIVE_CATEGORY = "catalog/SET_ACTIVE_CATEGORY"
export const SET_USER = "profile/SET_USER"
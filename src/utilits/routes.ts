import { FC } from "react"
import {
  CART_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from "./constants"
import MainPage from "../pages/mainPage"
import LoginPage from "../pages/loginPage"
import RegistrationPage from "../pages/registrationPage"
import CartPage from "../pages/cartPage"
import ProductPage from "../pages/productPage"
import ShopPage from "../pages/shopPage"
import ProfilePage from "../pages/profilePage"

interface Route {
  path: string
  Component: FC
}

export const publicRoutes: Route[] = [
  {
    path: MAIN_ROUTE,
    Component: MainPage
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrationPage
  }
]

export const privateRoutes = [
  {
    path: CART_ROUTE,
    Component: CartPage
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage
  },
  {
    path: SHOP_ROUTE + "/:id",
    Component: ShopPage
  },
  {
    path: PROFILE_ROUTE + "/:id",
    Component: ProfilePage
  }
]
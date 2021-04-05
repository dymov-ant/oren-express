import { FC } from "react"
import {
  CART_ROUTE,
  CATALOG_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PRODUCT_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SETTINGS_PAGE,
  SHOP_ROUTE
} from "./constants"
import MainPage from "../pages/mainPage"
import LoginPage from "../pages/authPages/loginPage"
import RegistrationPage from "../pages/authPages/registrationPage"
import CartPage from "../pages/cartPage"
import ProductPage from "../pages/productPage"
import ShopPage from "../pages/shopPage"
import ProfilePage from "../pages/profilePage"
import CatalogPage from "../pages/catalogPage"
import SettingsPage from "../pages/settingsPage"

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
    path: CATALOG_ROUTE + "/:id",
    Component: CatalogPage
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage
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
    path: SHOP_ROUTE + "/:id",
    Component: ShopPage
  },
  {
    path: PROFILE_ROUTE + "/:id",
    Component: ProfilePage
  },
  {
    path: SETTINGS_PAGE,
    Component: SettingsPage
  }
]
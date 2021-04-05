import {
  ADD_BREADCRUMBS_ITEM, CLEAR_BREADCRUMBS,
  SET_CATALOG,
  TOGGLE_CATALOG
} from "../utilits/constants"
import { ISetIsLoading } from "./appTypes"

export interface IBreadcrumb {
  to: string
  name: string
}

export interface ICatalogItem {
  id: number
  name: string
  children?: ICatalogItem[]
  padding?: number
}

export interface ISetCatalog {
  type: typeof SET_CATALOG
  catalog: ICatalogItem[]
}

export interface IToggleCatalog {
  type: typeof TOGGLE_CATALOG
  isOpen: boolean
}

export interface IAddBreadcrumbsItem {
  type: typeof ADD_BREADCRUMBS_ITEM
  breadcrumbsItem: IBreadcrumb
}

export interface IClearBreadcrumbs {
  type: typeof CLEAR_BREADCRUMBS
}

export type CatalogActionTypes =
  ISetCatalog
  | IToggleCatalog
  | IAddBreadcrumbsItem
  | IClearBreadcrumbs
  | ISetIsLoading
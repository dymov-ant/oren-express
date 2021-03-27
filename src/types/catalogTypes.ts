import {
  ADD_BREADCRUMBS_ITEM, CLEAR_BREADCRUMBS,
  SET_ACTIVE_CATEGORY,
  SET_CATALOG,
  TOGGLE_CATALOG
} from "../utilits/constants"

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

export interface ISetActiveCategory {
  type: typeof SET_ACTIVE_CATEGORY
  category: string
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
  | ISetActiveCategory
  | IAddBreadcrumbsItem
  | IClearBreadcrumbs
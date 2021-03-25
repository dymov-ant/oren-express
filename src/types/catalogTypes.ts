import { SET_ACTIVE_CATEGORY, SET_CATALOG, TOGGLE_CATALOG } from "../utilits/constants"

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

export type CatalogActionTypes = ISetCatalog | IToggleCatalog | ISetActiveCategory
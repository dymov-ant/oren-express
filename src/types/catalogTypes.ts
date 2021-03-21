import { SET_ACTIVE_CATEGORY, TOGGLE_CATALOG } from "../utilits/constants"

export interface IToggleCatalog {
  type: typeof TOGGLE_CATALOG
  isOpen: boolean
}

export interface ISetActiveCategory {
  type: typeof SET_ACTIVE_CATEGORY
  category: string
}

export type CatalogActionTypes = IToggleCatalog | ISetActiveCategory
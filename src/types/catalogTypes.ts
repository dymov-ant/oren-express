import { TOGGLE_CATALOG } from "../utilits/constants"

export interface IToggleCatalog {
  type: typeof TOGGLE_CATALOG
  isOpen: boolean
}

export type CatalogActionTypes = IToggleCatalog
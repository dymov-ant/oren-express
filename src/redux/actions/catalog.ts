import { ISetActiveCategory, IToggleCatalog } from "../../types/catalogTypes"
import { SET_ACTIVE_CATEGORY, TOGGLE_CATALOG } from "../../utilits/constants"

export const toggleCatalog = (isOpen: boolean): IToggleCatalog => ({
  type: TOGGLE_CATALOG,
  isOpen
})

export const setActiveCategory = (category: string): ISetActiveCategory => ({
  type: SET_ACTIVE_CATEGORY,
  category
})
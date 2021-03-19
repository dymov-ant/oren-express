import { IToggleCatalog } from "../../types/catalogTypes"
import { TOGGLE_CATALOG } from "../../utilits/constants"

export const toggleCatalog = (isOpen: boolean): IToggleCatalog => ({
  type: TOGGLE_CATALOG,
  isOpen
})
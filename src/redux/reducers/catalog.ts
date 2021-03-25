import { CatalogActionTypes, ICatalogItem } from "../../types/catalogTypes"
import { SET_ACTIVE_CATEGORY, SET_CATALOG, TOGGLE_CATALOG } from "../../utilits/constants"

interface ICatalogState {
  open: boolean,
  activeCategory: string,
  catalog: ICatalogItem[]
}

const initialState: ICatalogState = {
  open: false,
  activeCategory: "",
  catalog: []
}

export const catalogReducer = (state = initialState, action: CatalogActionTypes): ICatalogState => {
  switch (action.type) {
    case SET_CATALOG:
      return {
        ...state,
        catalog: action.catalog
      }
    case TOGGLE_CATALOG:
      return {
        ...state,
        open: action.isOpen
      }
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.category
      }
    default:
      return state
  }
}
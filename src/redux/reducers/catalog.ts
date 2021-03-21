import { CatalogActionTypes } from "../../types/catalogTypes"
import { SET_ACTIVE_CATEGORY, TOGGLE_CATALOG } from "../../utilits/constants"

interface ICatalogState {
  open: boolean,
  activeCategory: string
}

const initialState: ICatalogState = {
  open: false,
  activeCategory: ""
}

export const catalogReducer = (state = initialState, action: CatalogActionTypes): ICatalogState => {
  switch (action.type) {
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
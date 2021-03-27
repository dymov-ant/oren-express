import { CatalogActionTypes, ICatalogItem } from "../../types/catalogTypes"
import { SET_CATALOG, TOGGLE_CATALOG } from "../../utilits/constants"

interface ICatalogState {
  open: boolean
  catalog: ICatalogItem[]
}

const initialState: ICatalogState = {
  open: false,
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
    default:
      return state
  }
}
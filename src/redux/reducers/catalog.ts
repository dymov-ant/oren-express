import { CatalogActionTypes } from "../../types/catalogTypes"
import { TOGGLE_CATALOG } from "../../utilits/constants"

interface ICatalogState {
  open: boolean
}

const initialState: ICatalogState = {
  open: false
}

export const catalogReducer = (state = initialState, action: CatalogActionTypes): ICatalogState => {
  switch (action.type) {
    case TOGGLE_CATALOG:
      return {
        ...state,
        open: action.isOpen
      }
    default:
      return state
  }
}
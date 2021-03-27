import { CatalogActionTypes, IBreadcrumb, ICatalogItem } from "../../types/catalogTypes"
import {
  ADD_BREADCRUMBS_ITEM,
  CLEAR_BREADCRUMBS,
  SET_ACTIVE_CATEGORY,
  SET_CATALOG,
  TOGGLE_CATALOG
} from "../../utilits/constants"

interface ICatalogState {
  open: boolean,
  activeCategory: string,
  catalog: ICatalogItem[],
  breadcrumbs: IBreadcrumb[]
}

const initialState: ICatalogState = {
  open: false,
  activeCategory: "",
  catalog: [],
  breadcrumbs: []
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
    case ADD_BREADCRUMBS_ITEM:
      return {
        ...state,
        breadcrumbs: [...state.breadcrumbs, action.breadcrumbsItem]
      }
    case CLEAR_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: []
      }
    default:
      return state
  }
}
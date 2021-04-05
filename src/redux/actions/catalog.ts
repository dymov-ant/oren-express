import { ThunkAction } from "redux-thunk"
import {
  CatalogActionTypes,
  IAddBreadcrumbsItem,
  IBreadcrumb,
  ICatalogItem,
  IClearBreadcrumbs,
  ISetCatalog,
  IToggleCatalog
} from "../../types/catalogTypes"
import { ADD_BREADCRUMBS_ITEM, CLEAR_BREADCRUMBS, SET_CATALOG, TOGGLE_CATALOG } from "../../utilits/constants"
import { StateType } from "../store"
import catalogAPI from "../../utilits/api/catalogAPI"

const setCatalog = (catalog: ICatalogItem[]): ISetCatalog => ({
  type: SET_CATALOG,
  catalog
})

export const toggleCatalog = (isOpen: boolean): IToggleCatalog => ({
  type: TOGGLE_CATALOG,
  isOpen
})

export const addBreadcrumbsItem = (breadcrumbsItem: IBreadcrumb): IAddBreadcrumbsItem => ({
  type: ADD_BREADCRUMBS_ITEM,
  breadcrumbsItem
})

export const clearBreadcrumbs = (): IClearBreadcrumbs => ({
  type: CLEAR_BREADCRUMBS
})

export type CatalogThunkType = ThunkAction<Promise<void>, StateType, unknown, CatalogActionTypes>

export const getCatalog = (): CatalogThunkType => async dispatch => {
  try {
    const response = await catalogAPI.getCatalog()
    if (response.status === 200) {
      dispatch(setCatalog(response.data))
    }
  } catch (e) {
    console.log(e.response)
  }
}
import { CatalogActionTypes, ICatalogItem, ISetCatalog, IToggleCatalog } from "../../types/catalogTypes"
import { SET_CATALOG, TOGGLE_CATALOG } from "../../utilits/constants"
import { ThunkAction } from "redux-thunk"
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

type CatalogThunkType = ThunkAction<Promise<void>, StateType, unknown, CatalogActionTypes>

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
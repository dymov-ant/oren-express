import React, { FC, useEffect } from "react"
import Breadcrumbs from "../../components/breadcrumbs"
import { useDispatch, useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { addBreadcrumbsItem, clearBreadcrumbs } from "../../redux/actions/catalog"
import { getCategoryNameById } from "../../utilits/getCategoryNameById"
import { CATALOG_ROUTE, PRODUCT_ROUTE } from "../../utilits/constants"

const ProductPage: FC = () => {
  const dispatch = useDispatch()
  const product = {
    id: 1,
    category_id: 22,
    name: "product"
  }
  const catalog = useSelector((state: StateType) => state.catalogReducer.catalog)
  const categoryName = getCategoryNameById(catalog, product.category_id)
  const breadcrumbsMap = useSelector((state: StateType) => state.catalogReducer.breadcrumbs)
  useEffect(() => {
    dispatch(clearBreadcrumbs())
    if (categoryName) {
      dispatch(addBreadcrumbsItem({
        to: `${CATALOG_ROUTE}/${product.category_id}`,
        name: categoryName
      }))
      dispatch(addBreadcrumbsItem({
        to: `${PRODUCT_ROUTE}/${product.id}`,
        name: product.name
      }))
    }
  }, [categoryName, dispatch, product.category_id, product.id, product.name])
  return (
    <div>
      <Breadcrumbs breadcrumbsMap={breadcrumbsMap}/>
      <h1>ProductPage</h1>
    </div>
  )
}

export default ProductPage
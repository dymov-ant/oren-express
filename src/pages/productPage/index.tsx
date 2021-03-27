import React, { FC, useEffect } from "react"
import Breadcrumbs from "../../components/breadcrumbs"
import { useDispatch, useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { addBreadcrumbsItem, clearBreadcrumbs } from "../../redux/actions/catalog"
import { getCategoryNameById } from "../../utilits/getCategoryNameById"
import { CATALOG_ROUTE, PRODUCT_ROUTE } from "../../utilits/constants"
import { setSelectedProduct } from "../../redux/actions/product"
import { useLocation } from "react-router-dom"

const ProductPage: FC = () => {
  const dispatch = useDispatch()
  const catalog = useSelector((state: StateType) => state.catalogReducer.catalog)
  const {pathname} = useLocation()
  const productId = pathname.split("/")[2]
  useEffect(() => {
    dispatch(setSelectedProduct(+productId))
  }, [dispatch, productId])
  const product = useSelector((state: StateType) => state.productReducer.selectedProduct)
  useEffect(() => {
    dispatch(clearBreadcrumbs())
    if (product) {
      const categoryName = getCategoryNameById(catalog, product.category_id)
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
    }
  }, [dispatch, catalog, product])
  const breadcrumbsMap = useSelector((state: StateType) => state.catalogReducer.breadcrumbs)

  return (
    <div>
      <Breadcrumbs breadcrumbsMap={breadcrumbsMap}/>
      <h1>{product?.name}</h1>
    </div>
  )
}

export default ProductPage
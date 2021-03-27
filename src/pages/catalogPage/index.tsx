import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { Typography } from "@material-ui/core"
import { useLocation } from "react-router-dom"
import ProductCard from "../../components/productCard"
import { useStyles } from "./styles"
import { addBreadcrumbsItem, clearBreadcrumbs } from "../../redux/actions/catalog"
import Breadcrumbs from "../../components/breadcrumbs"
import { getCategoryNameById } from "../../utilits/getCategoryNameById"

const CatalogPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const categoryId = pathname.split("/")[2] //url выглядит так: /catalog/id
  const catalog = useSelector((state: StateType) => state.catalogReducer.catalog)
  const categoryName = getCategoryNameById(catalog, +categoryId)
  useEffect(() => {
    dispatch(clearBreadcrumbs())
    if (categoryName) {
      dispatch(addBreadcrumbsItem({
        name: categoryName,
        to: pathname
      }))
    }
  }, [pathname, categoryName, dispatch])
  const breadcrumbsMap = useSelector((state: StateType) => state.catalogReducer.breadcrumbs)

  return (
    <>
      {categoryName && <Breadcrumbs breadcrumbsMap={breadcrumbsMap}/>}
      <Typography variant="h4" component="h3" className={classes.title}>
        {categoryName}
      </Typography>
      <div className={classes.root}>
        <div className={classes.listProducts}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i=> <ProductCard key={i}/>)
          }
        </div>
      </div>
    </>
  )
}

export default CatalogPage
import React, { useEffect } from "react"
import { Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
// import ProductCard from "../../components/productCard"
import { getProducts } from "../../redux/actions/product"
import { StateType } from "../../redux/store"
import { addBreadcrumbsItem, clearBreadcrumbs } from "../../redux/actions/catalog"
import Breadcrumbs from "../../components/breadcrumbs"
import { getCategoryNameById } from "../../utilits/getCategoryNameById"
import ProductList from "../../components/productList"
import { useStyles } from "./styles"

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

  useEffect(() => {
    dispatch(getProducts(+categoryId))
  }, [categoryId, dispatch])
  const products = useSelector((state: StateType) => state.productReducer.products)

  return (
    <>
      {categoryName && <Breadcrumbs breadcrumbsMap={breadcrumbsMap}/>}
      <Typography variant="h4" component="h3" className={classes.title}>
        {categoryName}
      </Typography>
      <div className={classes.root}>
        <ProductList products={products}/>
        {/*<div className={classes.listProducts}>*/}
        {/*  {*/}
        {/*    products.map(item=> <ProductCard {...item} key={item.id}/>)*/}
        {/*  }*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default CatalogPage
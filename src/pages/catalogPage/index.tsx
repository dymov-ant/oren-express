import React, { useEffect } from "react"
import { useStyles } from "./styles"
import ProductCard from "../../components/productCard"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getProducts } from "../../redux/actions/product"
import { StateType } from "../../redux/store"

const CatalogPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const catalogId = pathname.split("/")[2]

  useEffect(() => {
    dispatch(getProducts(+catalogId))
  }, [catalogId, dispatch])
  const products = useSelector((state: StateType) => state.productReducer.products)

  return (
    <>
      <div className={classes.root}>

        <div className={classes.listProducts}>
          {
            products.map(item=> <ProductCard {...item} key={item.id}/>)
          }
        </div>
      </div>
    </>

  )
}

export default CatalogPage
import React from "react"
import { useStyles } from "./styles"
import ProductCard from "../../components/productCard"

const CatalogPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/*<div className={classes.listFilters}>*/}
      {/*  фильтры*/}
      {/*</div>*/}
      <div className={classes.listProducts}>
        {
          [1, 2, 3, 4, 5].map(i=> <ProductCard key={i}/>)
        }
      </div>
    </div>
  )
}

export default CatalogPage
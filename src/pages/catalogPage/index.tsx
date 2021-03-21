import React from "react"
import { useStyles } from "./styles"
import ProductCard from "../../components/productCard"
import { useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { Typography } from "@material-ui/core"

const CatalogPage = () => {
  const classes = useStyles()
  const categoryName = useSelector((state: StateType) => state.catalogReducer.activeCategory)

  return (
    <>
      <Typography variant="h4" component="h3" className={classes.title}>
        {categoryName}
      </Typography>
      <div className={classes.root}>
        {/*<div className={classes.listFilters}>*/}
        {/*  фильтры*/}
        {/*</div>*/}

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
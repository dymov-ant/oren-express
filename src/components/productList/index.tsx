import React, { FC } from "react"
import { IProduct } from "../../types/productType"
import ProductCard from "../productCard"
import { useStyles } from "./styles"

interface ProductListProps {
  products: IProduct[]
}

const ProductList: FC<ProductListProps> = ({products}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {products.map(item => <ProductCard {...item} key={item.id}/>)}
    </div>
  )
}

export default ProductList
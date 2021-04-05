import React, { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Typography } from "@material-ui/core"
import ProductList from "../../components/productList"
import { StateType } from "../../redux/store"
import { IProduct } from "../../types/productType"
import { setLastViewedProducts } from "../../redux/actions/product"
import AppLoad from "../../components/appLoad"
import { useStyles } from "./styles"

const data: IProduct[] = [
  {
    id: 35,
    name: "Валенки",
    category_id: 1,
    user_id: 1,
    shop_id: 1,
    main_photo: "https://img.mvideo.ru/Pdb/20038263b.jpg",
    price: 1122,
    description: "tralala",
    created_at: "tut budet data",
    updated_at: "i tut budet data"
  },
  {
    id: 36,
    name: "Валенки",
    category_id: 1,
    user_id: 1,
    shop_id: 1,
    main_photo: "https://img.mvideo.ru/Pdb/20038263b.jpg",
    price: 1122,
    description: "tralala",
    created_at: "tut budet data",
    updated_at: "i tut budet data"
  }
]

const MainPage: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLastViewedProducts(data))
  }, [dispatch])

  const lastViewedProducts = useSelector((state: StateType) => state.productReducer.lastViewedProducts)
  const isLoading = useSelector((state: StateType) => state.appReducer.isLoading)

  if (isLoading) {
    return <AppLoad/>
  }

  return (
    <div className={classes.root}>
      <div>
        Слайдер
      </div>
      <div>
        {
          lastViewedProducts.length
            ? <>
              <Typography variant="h6" gutterBottom>
                Вы смотрели
              </Typography>
              <ProductList products={lastViewedProducts}/>
            </>
            : <Typography variant="h6" gutterBottom>
              Вы еще ничего не смотрели! Самое время начать!
            </Typography>
        }

      </div>
    </div>
  )
}

export default MainPage
import React, { FC } from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { Link } from "react-router-dom"
import { SETTINGS_PAGE } from "../../utilits/constants"
import ProductList from "../../components/productList"
import { useStyles } from "./styles"
import { IProduct } from "../../types/productType"

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

const ProfilePage: FC = () => {
  const classes = useStyles()
  const user = useSelector((state: StateType) => state.profileReducer.user)

  return (
    <>
      <div className={classes.userData}>
        <Typography variant="h4">
          {user?.name}
        </Typography>
        <Typography variant="h5">
          {user?.email}
        </Typography>
        <Grid container justify="flex-end">
          <Grid item>
            <Button variant="text" color="secondary" component={Link} to={SETTINGS_PAGE}>
              Редактировать
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.history}>
        <Typography variant="h5">
          История покупок
        </Typography>
        <ProductList products={data}/>
      </div>
    </>
  )
}

export default ProfilePage
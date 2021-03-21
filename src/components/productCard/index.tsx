import React from "react"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link as MuiLink,
  Typography
} from "@material-ui/core"
import { Favorite } from "@material-ui/icons"
import {Link} from "react-router-dom"
import { useStyles } from "./styles"
import { PRODUCT_ROUTE } from "../../utilits/constants"
import { IProduct } from "../../types/productTypes"

const ProductCard = () => {
  const classes = useStyles()

  const product: IProduct = {
    id: 24,
    shop_id: null,
    user_id: 9,
    category_id: 1,
    name: "repudiandae voluptatem iure",
    description: "Perspiciatis consectetur libero sapiente recusandae. Tempore modi eaque excepturi reiciendis nobis ad tempore. Laborum adipisci quasi in eaque quisquam vero voluptates.",
    main_photo: "https://img.mvideo.ru/Pdb/20038263b.jpg",
    photos: "/tmp/236a89a70035058e1156498917d7bb53.png|/tmp/224928ca2841a19bb9a8e817b64629b8.png|/tmp/578431cc1b47d6ae07addc76c8156609.png|/tmp/4799d1f728cb6c12a418d90054b66f3f.png",
    price: 9306.84,
    created_at: "2021-03-15T07:35:05.000000Z",
    updated_at: "2021-03-15T07:35:05.000000Z"
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <MuiLink component={Link} to={PRODUCT_ROUTE + `/${product.id}`} underline="none" color="textPrimary">
          <CardMedia
            className={classes.media}
            image={product.main_photo}
            title={product.name}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              // noWrap
              className={classes.title}
              title={product.name}
            >
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              {product.price + " ₽"}
            </Typography>
          </CardContent>
        </MuiLink>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button color="secondary" variant="outlined">
          В корзину
        </Button>
        <IconButton title="В избранное">
          <Favorite/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
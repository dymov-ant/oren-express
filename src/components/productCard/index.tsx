import React, { FC } from "react"
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
import { IProduct } from "../../types/productType"

const ProductCard: FC<IProduct> = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <MuiLink component={Link} to={PRODUCT_ROUTE + `/${props.id}`} underline="none" color="textPrimary">
          <CardMedia
            className={classes.media}
            // todo Константин ленится сделать фотки для товаров
            image="https://img.mvideo.ru/Pdb/20038263b.jpg"
            title={props.name}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              // noWrap
              className={classes.title}
              title={props.name}
            >
              {props.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              {props.price + " ₽"}
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
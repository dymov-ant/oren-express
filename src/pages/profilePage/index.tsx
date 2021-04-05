import React, { FC } from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import { useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { Link } from "react-router-dom"
import { SETTINGS_PAGE } from "../../utilits/constants"
import { useStyles } from "./styles"

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
        История покупок
      </div>
    </>
  )
}

export default ProfilePage
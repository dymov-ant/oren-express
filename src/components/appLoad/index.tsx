import React, { FC } from "react"
import { Grid } from "@material-ui/core"
import appLoad from "../../common/appLoad.gif"
import { useStyles } from "./styles"

const AppLoad: FC = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item>
        <img src={appLoad} alt="loading" className={classes.image}/>
      </Grid>
    </Grid>
  )
}

export default AppLoad
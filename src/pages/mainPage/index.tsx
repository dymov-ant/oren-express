import React, { FC } from "react"
import Catalog from "../../components/catalog"
import { useStyles } from "./styles"

const MainPage: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Catalog/>
      <div>
        <h1>MainPage</h1>
      </div>
    </div>
  )
}

export default MainPage
import React, { FC } from "react"
import { useStyles } from "./styles"

const MainPage: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <h1>MainPage</h1>
      </div>
    </div>
  )
}

export default MainPage
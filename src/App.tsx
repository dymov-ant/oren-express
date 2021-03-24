import React, { useEffect } from "react"
import { CircularProgress, Container, Grid } from "@material-ui/core"
import AppRoutes from "./components/appRoutes"
import Header from "./components/header"
import Catalog from "./components/catalog"
import { useDispatch, useSelector } from "react-redux"
import { initialization } from "./redux/actions/app"
import { StateType } from "./redux/store"

const App = () => {
  const dispatch = useDispatch()
  const isInitialized = useSelector((state: StateType) => state.appReducer.isInitialized)
  useEffect(() => {
    dispatch(initialization())
  }, [])

  if (!isInitialized) {
    return (
      <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
        <Grid item>
          <CircularProgress/>
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Header/>
      <Catalog/>
      <Container>
        <AppRoutes/>
      </Container>
    </>
  )
}

export default App
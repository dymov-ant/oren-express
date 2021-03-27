import React, { useEffect } from "react"
import { Container } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import AppRoutes from "./components/appRoutes"
import Header from "./components/header"
import Catalog from "./components/catalog"
import { initialization } from "./redux/actions/app"
import { StateType } from "./redux/store"
import AppLoad from "./components/appLoad"

const App = () => {
  const dispatch = useDispatch()
  const isInitialized = useSelector((state: StateType) => state.appReducer.isInitialized)
  useEffect(() => {
    dispatch(initialization())
  }, [dispatch])

  if (!isInitialized) {
    return (
      <AppLoad/>
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
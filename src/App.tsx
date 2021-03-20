import React from "react"
import AppRoutes from "./components/appRoutes"
import Header from "./components/header"
import { Container } from "@material-ui/core"
import Catalog from "./components/catalog"

const App = () => {
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
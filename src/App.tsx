import React from "react"
import { Container } from "@material-ui/core"
import AppRoutes from "./components/appRoutes"
import Header from "./components/header"
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
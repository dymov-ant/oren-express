import React from "react"
import AppRoutes from "./components/appRoutes"
import Header from "./components/header"

const App = () => {
  const isAuth = true
  return (
    <>
      <Header isAuth={isAuth}/>
      <AppRoutes/>
    </>
  )
}

export default App
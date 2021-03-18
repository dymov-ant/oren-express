import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../utilits/routes"
import { MAIN_ROUTE } from "../utilits/constants"

const AppRoutes = () => {
  const isAuth = false

  return (
    <Switch>
      {
        isAuth && privateRoutes.map(({path, Component}) =>
          <Route path={path} component={Component} exact key={path}/>)
      }
      {
        publicRoutes.map(({path, Component}) =>
          <Route path={path} component={Component} exact key={path}/>)
      }
      <Redirect to={MAIN_ROUTE}/>
    </Switch>
  )
}

export default AppRoutes
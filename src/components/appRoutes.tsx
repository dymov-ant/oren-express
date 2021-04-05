import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../utilits/routes"
import { MAIN_ROUTE } from "../utilits/constants"
import { useSelector } from "react-redux"
import { StateType } from "../redux/store"

const AppRoutes = () => {
  const isAuth = useSelector((state: StateType) => state.profileReducer.isAuthenticated)

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
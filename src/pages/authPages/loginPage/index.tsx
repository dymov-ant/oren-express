import React, { FC } from "react"
import { Avatar, Button, Container, Grid, LinearProgress, Link as MuiLink, Typography } from "@material-ui/core"
import { LockOutlined } from "@material-ui/icons"
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-material-ui"
import { ILoginData } from "../../../types/authTypes"
import { loginSchema } from "../../../utilits/validationSchemes"
import { MAIN_ROUTE, REGISTRATION_ROUTE } from "../../../utilits/constants"
import { login } from "../../../redux/actions/profile"
import { StateType } from "../../../redux/store"
import AppLoad from "../../../components/appLoad"
import { useStyles } from "../styles"

const LoginPage: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const auth = useSelector((state: StateType) => state.profileReducer.isAuthenticated)
  const isLoading = useSelector((state: StateType) => state.appReducer.isLoading)
  const initialValues: ILoginData = {
    email: "",
    password: ""
  }

  if (auth) {
    return <Redirect to={MAIN_ROUTE}/>
  }

  if (isLoading) {
    return <AppLoad/>
  }

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          Вход
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async values => {
            await dispatch(login(values))
          }}
        >
          {
            ({errors, touched, isSubmitting}) => (
              <Form noValidate className={classes.form}>
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  required
                  disabled={isSubmitting}
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input}
                  helperText={(errors.email && touched.email) && errors.email}
                  component={TextField}
                />
                <Field
                  type="password"
                  name="password"
                  label="Пароль"
                  required
                  disabled={isSubmitting}
                  variant="outlined"
                  fullWidth
                  size="small"
                  className={classes.input}
                  helperText={(errors.password && touched.password) && errors.password}
                  component={TextField}
                />
                {
                  isSubmitting
                    ? <LinearProgress/>
                    : <>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="contained"
                        fullWidth
                        color="primary"
                        className={classes.button}
                      >
                        Войти
                      </Button>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <MuiLink
                            variant="body2"
                            component={Link}
                            to={REGISTRATION_ROUTE}
                          >
                            Нет аккаунта? Регистрация!
                          </MuiLink>
                        </Grid>
                      </Grid>
                    </>
                }
              </Form>
            )
          }
        </Formik>
      </div>
    </Container>
  )
}

export default LoginPage
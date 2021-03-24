import React, { FC } from "react"
import { Avatar, Button, Container, Grid, LinearProgress, Link as MuiLink, Typography } from "@material-ui/core"
import { LockOutlined } from "@material-ui/icons"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-material-ui"
import { Link } from "react-router-dom"
import { registerSchema } from "../../../utilits/validationSchemes"
import { LOGIN_ROUTE } from "../../../utilits/constants"
import { RegisterData } from "../../../types/authTypes"
import { useStyles } from "../styles"

const RegistrationPage: FC = () => {
  const classes = useStyles()
  const initialValues = {
    email: "",
    password: "",
    password2: ""
  }

  const handlerSubmit = async (values: RegisterData) => {
    await new Promise((r) => setTimeout(r, 2000))
    console.log(values)
  }

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          Регистрация
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async values => {
            await handlerSubmit(values)
          }}
        >
          {({errors, touched, isSubmitting}) => (
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
              <Field
                type="password"
                name="password2"
                label="Повторте пароль"
                required
                disabled={isSubmitting}
                variant="outlined"
                fullWidth
                size="small"
                className={classes.input}
                helperText={(errors.password2 && touched.password2) && errors.password2}
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
                      Регистрация
                    </Button>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <MuiLink
                          variant="body2"
                          component={Link}
                          to={LOGIN_ROUTE}
                        >
                          Уже есть аккаунт? Войти!
                        </MuiLink>
                      </Grid>
                    </Grid>
                  </>
              }
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default RegistrationPage
import React, { FC } from "react"
import { Field, Form, Formik } from "formik"
import { Button, Grid, LinearProgress } from "@material-ui/core"
import { useSelector } from "react-redux"
import { TextField } from "formik-material-ui"
import { IUser } from "../../types/profileTypes"
import { StateType } from "../../redux/store"
import { settingProfileSchema } from "../../utilits/validationSchemes"
import AppLoad from "../../components/appLoad"
import { useStyles } from "./styles"

const SettingsPage: FC = () => {
  const classes = useStyles()
  const user = useSelector((state: StateType) => state.profileReducer.user)
  const isLoading = useSelector((state: StateType) => state.appReducer.isLoading)
  const initialValues: IUser = {
    name: user?.name || "",
    email: user?.email || ""
  }

  if (isLoading) {
    return <AppLoad/>
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={settingProfileSchema}
        onSubmit={values => {
          setTimeout(() => {
            console.log(values)
          }, 500)
        }}
      >
        {
          ({errors, touched, isSubmitting}) => (
            <Form noValidate>
              <Field
                type="text"
                name="name"
                label="Имя"
                required
                disabled={isSubmitting}
                variant="outlined"
                fullWidth
                size="small"
                className={classes.input}
                helperText={(errors.name && touched.name) && errors.name}
                component={TextField}
              />
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
              {
                isSubmitting
                  ? <LinearProgress/>
                  : <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                    >
                      Сохранить
                    </Button>
                  </Grid>
                  </Grid>
              }
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default SettingsPage
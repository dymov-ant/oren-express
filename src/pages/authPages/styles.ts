import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  form: {
    marginBottom: theme.spacing(2)
  },
  input: {
    margin: theme.spacing(1, 0)
  },
  button: {
    margin: theme.spacing(1, 0)
  }
}))
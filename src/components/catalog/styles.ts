import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginRight: theme.spacing(2)
  },
  list: {
    width: 250
  }
}))
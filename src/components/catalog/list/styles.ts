import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  list: {
    width: 250
  },
  nested: {
    paddingLeft: theme.spacing(5)
  }
}))
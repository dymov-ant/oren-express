import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "top"
  },
  listFilters: {
    width: 200,
    backgroundColor: theme.palette.secondary.light,
    marginRight: theme.spacing(2)
  },
  listProducts: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
}))
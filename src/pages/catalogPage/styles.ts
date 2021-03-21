import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "top"
  },
  title: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  listFilters: {
    width: 200,
    backgroundColor: theme.palette.secondary.light,
    marginRight: theme.spacing(2)
  },
  listProducts: {
    display: "flex",
    flex: "1 0 70%",
    flexWrap: "wrap",
    flexDirection: "row",
    // justifyContent: "space-between"
    alignItems: "stretch"
  }
}))
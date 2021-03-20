import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: 220,
    height: 307,
    margin: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: 250
    },
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 330
    }
  },
  media: {
    height: 150,
    backgroundSize: "contain"
  },
  content: {
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  title: {
    maxWidth: `calc(220px - ${theme.spacing(4)}px)`,
    height: 40,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 0
  }
}))
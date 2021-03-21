import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    // width: 220,
    flex: `0 0 calc(25% - ${theme.spacing(2)}px)`,
    height: 307,
    margin: `${theme.spacing(1)}px`,
    [theme.breakpoints.down("md")]: {
      flex: `0 0 calc(33.3% - ${theme.spacing(2)}px)`
    },
    [theme.breakpoints.down("sm")]: {
      flex: `0 0 calc(50% - ${theme.spacing(2)}px)`
    },
    [theme.breakpoints.down("xs")]: {
      flex: `0 0 calc(100% - ${theme.spacing(2)}px)`
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
    // maxWidth: `calc(220px - ${theme.spacing(4)}px)`,
    flex: `0 0 calc(50% - ${theme.spacing(4)}px)`,
    height: 40,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("md")]: {
      flex: `0 0 calc(33.3% - ${theme.spacing(4)}px)`
    },
    [theme.breakpoints.down("sm")]: {
      flex: `0 0 calc(50% - ${theme.spacing(4)}px)`
    },
    [theme.breakpoints.down("xs")]: {
      flex: `0 0 calc(100% - ${theme.spacing(4)}px)`
    }
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 0
  }
}))
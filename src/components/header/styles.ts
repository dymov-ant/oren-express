import { createStyles, fade, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => createStyles({
  wrapper: {
    marginBottom: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  menuButton: {
    backgroundColor: theme.palette.secondary.dark,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1)
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    transition: theme.transitions.create("background-color")
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width")
  },
  sectionButtons: {
    display: "flex"
  }
}))
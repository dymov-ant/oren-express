import React, { FC, MouseEvent, useState } from "react"
import {
  AppBar,
  Badge,
  Button,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import CartIcon from "@material-ui/icons/ShoppingCart"
import AccountIcon from "@material-ui/icons/AccountCircle"
import { useDispatch, useSelector } from "react-redux"
import { toggleCatalog } from "../../redux/actions/catalog"
import { StateType } from "../../redux/store"
import { setUser } from "../../redux/actions/profile"
import { useStyles } from "./styles"


const Header: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const isAuth = useSelector((state: StateType) => state.profileReducer.isAuthenticated)
  const notificationsCount = 2 // временное решение для отображения badge

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const openCatalog = () => {
    dispatch(toggleCatalog(true))
  }
  const login = () => {
    dispatch(setUser({id: 1, name: "test"}))
  }
  const logout = () => {
    setAnchorEl(null)
    dispatch(setUser(null))
  }

  const ProfileMenu = (
    <Menu
      open={isMenuOpen}
      anchorEl={anchorEl}
      anchorOrigin={{vertical: "top", horizontal: "right"}}
      transformOrigin={{vertical: "top", horizontal: "right"}}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Badge color="secondary" variant="dot" badgeContent={notificationsCount}>Профиль</Badge>
      </MenuItem>
      <Divider light/>
      <MenuItem onClick={logout} color="secondary">
        <Typography color="secondary">Выход</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            OrenExpress
          </Typography>
          <Button variant="contained" color="secondary" onClick={openCatalog}>
            Каталог
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Я ищу..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{"aria-label": "search"}}
            />
          </div>
          <div className={classes.grow}/>
          {
            isAuth
              ? <div className={classes.sectionButtons}>
                <IconButton color="inherit">
                  <Badge badgeContent={notificationsCount} color="secondary">
                    <CartIcon/>
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <Badge variant="dot" color="secondary" badgeContent={notificationsCount}>
                    <AccountIcon/>
                  </Badge>
                </IconButton>
              </div>
              : <Button variant="contained" color="secondary" onClick={login}>Войти</Button>
          }
        </Toolbar>
      </AppBar>
      {ProfileMenu}
    </div>
  )
}

export default Header
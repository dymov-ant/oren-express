import React, { KeyboardEvent, MouseEvent } from "react"
import { Drawer } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { StateType } from "../../redux/store"
import { toggleCatalog } from "../../redux/actions/catalog"
import CatalogList from "./list"
import { useStyles } from "./styles"


const Catalog = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const open = useSelector((state: StateType) => state.catalogReducer.open)

  const toggleDrawer = (isOpen: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === "keydown" && ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")) {
      return
    }
    dispatch(toggleCatalog(isOpen))
  }

  return (
    <div className={classes.root}>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <CatalogList/>
        </div>
      </Drawer>
    </div>
  )
}

export default Catalog
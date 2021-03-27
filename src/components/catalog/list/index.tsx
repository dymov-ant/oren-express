import React, { FC, useState } from "react"
import { Collapse, Link as MuiLink, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { CATALOG_ROUTE } from "../../../utilits/constants"
import { toggleCatalog } from "../../../redux/actions/catalog"
import { ICatalogItem } from "../../../types/catalogTypes"
import { StateType } from "../../../redux/store"

const SingleLevel: FC<ICatalogItem> = ({id, name, padding}) => {
  const dispatch = useDispatch()
  const closeDrawer = () => {
    dispatch(toggleCatalog(false))
  }

  return (
    <MuiLink component={Link} to={CATALOG_ROUTE + `/${id}`} underline="none" color="textPrimary">
      <ListItem button style={{paddingLeft: padding}} onClick={closeDrawer}>
        <ListItemText primary={name}/>
      </ListItem>
    </MuiLink>
  )
}

const MultiLevel: FC<ICatalogItem> = ({padding, ...item}) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem button onClick={handleClick} style={{paddingLeft: padding}}>
        <ListItemText primary={item.name}/>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            item.children && item.children.map((catalogItem) =>
              <MenuItem {...catalogItem} padding={padding && padding * 2} key={catalogItem.id}/>)
          }
        </List>
      </Collapse>
    </>
  )
}

const MenuItem: FC<ICatalogItem> = (item) => {
  return (
    item.children && item.children.length > 0
      ? <MultiLevel {...item}/>
      : <SingleLevel {...item}/>
  )
}

const CatalogList: FC = () => {
  const catalog = useSelector((state: StateType) => state.catalogReducer.catalog)

  return (
    <>
      {
        catalog.map((item) =>
          <MenuItem {...item} padding={15} key={item.id}/>)
      }
    </>
  )
}

export default CatalogList
import React, { FC, useEffect, useState } from "react"
import { Collapse, Link as MuiLink, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { CATALOG_ROUTE } from "../../../utilits/constants"
import { useDispatch } from "react-redux"
import { toggleCatalog } from "../../../redux/actions/catalog"

const getData = (): ICatalogItem[] => {
  return [
    {
      id: 1,
      name: "Category1"
    },
    {
      id: 2,
      name: "Category2"
    },
    {
      id: 3,
      name: "Category3",
      subCatalog: [
        {
          id: 4,
          name: "Category3_1",
          subCatalog: [
            {
              id: 10,
              name: "Category3_1_1"
            },
            {
              id: 11,
              name: "Category3_1_2"
            },
          ]
        },
        {
          id: 5,
          name: "Category3_2"
        },
      ]
    },
    {
      id: 6,
      name: "Category4",
      subCatalog: [
        {
          id: 7,
          name: "Category4_1"
        },
        {
          id: 8,
          name: "Category4_2"
        },
        {
          id: 9,
          name: "Category4_3"
        }
      ]
    },
  ]
}

interface ICatalogItem {
  id: number
  name: string
  link?: string
  padding?: number
  subCatalog?: ICatalogItem[]
}


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

// const MultiLevel: FC<ICatalogItem> = ({name, subCatalog = [], padding}) => {
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
            item.subCatalog && item.subCatalog.map((catalogItem) =>
              <MenuItem {...catalogItem} padding={padding && padding * 2} key={catalogItem.id}/>)
          }
        </List>
      </Collapse>
    </>
  )
}

const MenuItem: FC<ICatalogItem> = (item) => {
  return (
    item.subCatalog && item.subCatalog.length > 0
      ? <MultiLevel {...item}/>
      : <SingleLevel {...item}/>
  )
}

const CatalogList: FC = () => {
  const [catalog, setCatalog] = useState<ICatalogItem[]>([])

  useEffect(() => {
    setCatalog(getData())
  }, [])

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
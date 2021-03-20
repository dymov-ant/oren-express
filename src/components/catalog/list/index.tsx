import React, { FC, useEffect, useState } from "react"
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

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
  id?: number
  name: string
  link?: string
  padding?: number
  subCatalog?: ICatalogItem[]
}


const SingleLevel: FC<ICatalogItem> = ({name, padding}) => {
  return (
    <ListItem button style={{paddingLeft: padding}}>
      <ListItemText primary={name}/>
    </ListItem>
  )
}

const MultiLevel: FC<ICatalogItem> = ({name, subCatalog = [], padding}) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem button onClick={handleClick} style={{paddingLeft: padding}}>
        <ListItemText primary={name}/>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            subCatalog.map((item, index) =>
              <MenuItem name={item.name} subCatalog={item.subCatalog} key={index} padding={padding && padding * 2}/>)
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
        catalog.map((item, index) =>
          <MenuItem name={item ? item.name : "dsa"} subCatalog={item && item.subCatalog} key={index} padding={15}/>)
      }
    </>
  )
}

export default CatalogList
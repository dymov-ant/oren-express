import React, { useState, KeyboardEvent, MouseEvent } from "react"
import { useStyles } from "./styles"
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"


const Catalog = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = (isOpen: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === "keydown" && ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")) {
      return
    }
    setOpen(isOpen)
  }

  const Sidebar = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={toggleDrawer(true)}>Каталог</Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {Sidebar}
      </Drawer>
    </div>
  )
}

export default Catalog
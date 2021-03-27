import React, { FC } from "react"
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { NavigateNext } from "@material-ui/icons"

interface IBreadcrumbs {
  to: string
  name: string
}

interface BreadcrumbsProps {
  breadcrumbsMap: IBreadcrumbs[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({breadcrumbsMap}) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" separator={<NavigateNext fontSize="small"/>}>
      {
        breadcrumbsMap.map((item, index) => {
          const last = index === breadcrumbsMap.length - 1
          return last
            ? <Typography color="textPrimary" key={item.to}>
              {item.name}
            </Typography>
            : <MuiLink color="inherit" component={Link} to={item.to} key={item.to}>
              {item.name}
            </MuiLink>
        })
      }
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
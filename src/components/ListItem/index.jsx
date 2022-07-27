import React from 'react'
import {ListItemST} from './listItem-styles'

const ListItem = ({i, val}) => {
  return (
    <ListItemST key={i}>
      <h3>{val}</h3>
    </ListItemST>
  )
}

export default ListItem
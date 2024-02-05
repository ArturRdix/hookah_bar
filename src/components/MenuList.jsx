import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({ items, id, addOrder, orders }) {
  return (
    <ul className="menu-list" id={id}>
      {items.map(e => {
        return <MenuItem orders={orders} addOrder={addOrder} item={e} key={e.id} />
      })}
    </ul>
  )
}

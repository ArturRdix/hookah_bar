import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({items, id}) {
  return (
    <ul className="menu-list" id={id}>
        {items.map(e=>{
             return <MenuItem item={e} key={e.title}/>
        })}
    </ul>
  )
}

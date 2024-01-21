import React from 'react'

export default function MenuItem({item}) {
    return (
        <li className="menu-list-item animation-element">
            <img src={item.imgSrc} loading="lazy" alt="" className="item-img" />
            <div className="menu-details">
                <h3 className="item-title">{item.title}</h3>
                <div className="item-subr">{item.subr}</div>
                <h3 className="item-price">{item.price} грн</h3>
            </div>
        </li>
    )
}

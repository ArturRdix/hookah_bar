import React, { useEffect, useState } from 'react'

export default function MenuItem({ item, addOrder, orders }) {
    const [orderItem, setOrderItem] = useState({
        id: item.id,
        amount: 0,
        item: item
    })

    function addItemOrder(number) {
        let tmpOrder = { ...orderItem }
        tmpOrder.amount += number;
        setOrderItem(tmpOrder);
        addOrder(tmpOrder);
    }

    return (
        <li className="menu-list-item animation-show">
            <div>
                <img src={item.imgSrc} loading="lazy" alt="" className="item-img" />
                <div className="menu-details">
                    <h3 className="item-price">{item.price} &#8372;</h3>
                    <h3 className="item-title">{item.title}</h3>
                    <div className="item-subr">{item.subr}</div>
                </div>
            </div>
            <div>{orderItem.amount > 0 ?
                <div className='item-regul'>
                    <button id='decrItem' onClick={() => { addItemOrder(-1) }}>-</button>
                    <span>{orderItem.amount}</span>
                    <button id='incrItem' onClick={() => { addItemOrder(1) }}>+</button>
                </div> :
                <button onClick={() => { addItemOrder(1) }} className={`item-btn ${orderItem.amount > 0 ?'show':'hidden'}`}>До кошику</button>}
            </div>
        </li>
    )
}

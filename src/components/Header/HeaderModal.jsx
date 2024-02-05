import React, { useEffect, useState } from 'react'
import ModalCart from '../ModalCart/ModalCart'
import { FaCartShopping } from "react-icons/fa6";

const { activeScroll, disableScroll } = window

export default function HeaderModal({ orders, activeModal, setActiveModal, setOrders }) {
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    if (activeModal) {
      disableScroll()
    }
    else {
      activeScroll()
    }
  }, [activeModal])


  return (
    <>
      <ModalCart orders={orders} active={activeModal} setActive={setActiveModal} setOrders={setOrders} />
      <header className="header">
        <nav
          className="header__nav"
        >
          <div className="header-nav-wrapper">
            <a href="/" className="header__nav-logo">
              <img className="img-logo" src="./img/menuItems/logo_bar.png" alt="" />
              <h1 className="logo">
                Hookah
              </h1>
            </a>
            <div className="nav-menu">
              <div className={`cart-block ${Object.values(orders).length > 0 ?'show-cart':''}`}>
                
                  <span> {Object.values(orders).length}</span>
                  <FaCartShopping onClick={() => setActiveModal(true)} className='cart-icon' />
                
              </div>
              <div
                id="burgerMenu"
                className={`burger-menu ${activeClass ? 'active' : ''} `}
                onClick={() => setActiveClass(activeClass => !activeClass)}
              >
                <span className="middle-line"></span>
              </div>
              <nav id="navMenu" className={`header__nav-menu ${activeClass ? 'active' : ''} `}>
                <h2><a href="#kuh">Кухня</a></h2>
                <h2><a href="#kall">Кальянна картка</a></h2>
                <h2><a href="#Koktail">Барна картка</a></h2>
                <h2><a href="#shots">Шоти</a></h2>
                <h2><a href="#alco">Алкогольна картка</a></h2>
                <h2><a href="#hotD">Гарячі напої</a></h2>
                <h2><a href="#fridg">Холодильник</a></h2>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </>

  )
}

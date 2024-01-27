import React, { useEffect, useState } from 'react'
import './App.css';
import productList from './components/productList';
import MenuList from './components/MenuList';
import { FaCartShopping } from "react-icons/fa6";
import ModalCart from './components/ModalCart/ModalCart';

function App() {
  const [activeClass, setActiveClass] = useState(false);
  const [orders, setOrders] = useState({})
  const [activeModal, setActiveModal] = useState(false)



  function addToOrders(item) {
    let newOrders = { ...orders }
    newOrders[item.id] = item
    if (item.amount <= 0) {
      delete newOrders[item.id]
    }
    setOrders(newOrders)

  }
  useEffect(() => {

    console.log(orders)
  }, [orders])
  return (
    <>
      <ModalCart orders={orders} active={activeModal} setActive={setActiveModal} />
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
              <div className="cart-block">
                <span>{Object.values(orders).length > 0 ? Object.values(orders).length : ''}</span>
                <FaCartShopping onClick={() => setActiveModal(true)} className='cart-icon' />
              </div>
              <div
                id="burgerMenu"
                className={`burger-menu ${activeClass ? 'active' : ''} `}
                onClick={() => setActiveClass(activeClass => !activeClass)}
              >
                <span className="middle-line"></span>
              </div>
              <div id="navMenu" className={`header__nav-menu ${activeClass ? 'active' : ''} `}>
                <h2><a href="#kuh">Кухня</a></h2>
                <h2><a href="#kall">Кальянна картка</a></h2>
                <h2><a href="#Koktail">Барна картка</a></h2>
                <h2><a href="#shots">Шоти</a></h2>
                <h2><a href="#alco">Алкогольна картка</a></h2>
                <h2><a href="#hotD">Гарячі напої</a></h2>
                <h2><a href="#fridg">Холодильник</a></h2>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="submenu">
        <a href="#kuh" className="submenu-wrapper">
          <div className="submenu-item kuhnya">
            <div className="submenu-text">
              <h3>КУХНЯ</h3>
              <h1>ТА ЗАКУСКИ</h1>
            </div>
            <div className="bacground"></div>
          </div>
        </a>
        <a href="#kall" className="submenu-wrapper">
          <div className="submenu-item kalyan">
            <div className="submenu-text">
              <h3>КРАЩІ КАЛЬЯНИ</h3>
              <h1>КАЛЬЯННА КАРТКА</h1>
            </div>
            <div className="bacground"></div>
          </div>
        </a>
        <a href="#Koktail" className="submenu-wrapper">
          <div className="submenu-item koktail">
            <div className="submenu-text">
              <h3>ОРИГІНАЛЬНІ КОКТЕЙЛІ</h3>
              <h1>БАРНА КАРТКА</h1>
            </div>
            <div className="bacground"></div>
          </div>
        </a>
        <a href="#alco" className="submenu-wrapper">
          <div className="submenu-item alco">
            <div className="submenu-text">
              <h3>КРАЩІ НАПОЇ</h3>
              <h1>АЛКОГОЛЬНА КАРТКА</h1>
            </div>
            <div className="bacground"></div>
          </div>
        </a>
      </div>
      <main>
        <div className="menu">
          <div className="wrapper-menu-title">
            <h2 id="kall" className="menu-title">Кальянна картка</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.hookahItem} id="hookahList" />

          <div className="wrapper-menu-title">
            <h2 id="kuh" className="menu-title">Кухня</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.kuhnyaItem} id="kuhnyaList" />

          <div className="wrapper-menu-title">
            <h2 id="hotD" className="menu-title">Гарячі напої</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.hotDrinkItem} id="hotDrinkList" />

          <div className="wrapper-menu-title">
            <h2 id="otherKuh" className="menu-title">Інші закуски</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.zakuskiItem} id="zakuskiList" />

          <div className="wrapper-menu-title">
            <h2 id="Koktail" className="menu-title">Коктейльна картка</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.barnayaKarta} id="koktailList" />

          <div className="wrapper-menu-title">
            <h2 id="shots" className="menu-title">Шоти</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.shotsItem} id="shotsList" />

          <div className="wrapper-menu-title">
            <h2 id="alco" className="menu-title">Алкогольна картка</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.alkoKArtaItem} id="alkoholList" />

          <div className="wrapper-menu-title">
            <h2 id="fridg" className="menu-title">Напої в холодильнику</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.holodosItem} id="fridgeList" />

          <div className="wrapper-menu-title">
            <h2 id="other" className="menu-title">Інше</h2>
          </div>
          <MenuList addOrder={addToOrders} items={productList.othersItem} id="otherList" />

        </div>
      </main>
    </>
  );
}

export default App;

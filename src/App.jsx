import React, { useEffect, useState } from 'react'
import './App.css';
import productList from './components/productList';
import MenuList from './components/MenuList';
import HeaderModal from './components/Header/HeaderModal';
import Footer from './components/Footer/Footer';
import Submenu from './components/Submenu/Submenu';

function App() {
  const [orders, setOrders] = useState({})
  const [activeModal, setActiveModal] = useState(false)
  const [amount, setAmount] = useState()

  useEffect(() => {
    const handleLinkClick = (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetElementTop = targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetElementTop - 60,
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  function clearAmount() {

  }

  function addToOrders(item) {
    let newOrders = { ...orders }
    newOrders[item.id] = item
    if (item.amount <= 0) {
      delete newOrders[item.id]
    }
    setOrders(newOrders)

  }
  return (
    <>
      <HeaderModal
        orders={orders}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        setOrders={setOrders} />

      <Submenu />
      
      <main>
        <div className="menu">
          <div className="wrapper-menu-title">
            <h2 id="kall" className="menu-title">Кальянна картка</h2>
          </div>
          <MenuList
            orders={orders}
            addOrder={addToOrders}
            items={productList.hookahItem}
            id="hookahList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="kuh" className="menu-title">Кухня</h2>
          </div>
          <MenuList
            orders={orders}
            addOrder={addToOrders}
            items={productList.kuhnyaItem}
            id="kuhnyaList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="hotD" className="menu-title">Гарячі напої</h2>
          </div>
          <MenuList
            orders={orders} addOrder={addToOrders}
            items={productList.hotDrinkItem}
            id="hotDrinkList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="otherKuh" className="menu-title">Інші закуски</h2>
          </div>
          <MenuList
            orders={orders} addOrder={addToOrders}
            items={productList.zakuskiItem}
            id="zakuskiList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="Koktail" className="menu-title">Коктейльна картка</h2>
          </div>
          <MenuList
            orders={orders}
            addOrder={addToOrders}
            items={productList.barnayaKarta}
            id="koktailList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="shots" className="menu-title">Шоти</h2>
          </div>
          <MenuList
            orders={orders}
            ddOrder={addToOrders}
            items={productList.shotsItem}
            id="shotsList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="alco" className="menu-title">Алкогольна картка</h2>
          </div>
          <MenuList
            orders={orders}
            addOrder={addToOrders}
            items={productList.alkoKArtaItem}
            id="alkoholList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="fridg" className="menu-title">Напої в холодильнику</h2>
          </div>
          <MenuList
            orders={orders}
            addOrder={addToOrders}
            items={productList.holodosItem}
            id="fridgeList"
            setAmount={setAmount} />

          <div className="wrapper-menu-title">
            <h2 id="other" className="menu-title">Інше</h2>
          </div>
          <MenuList
            orders={orders}
            addOrder={addToOrders}
            items={productList.othersItem}
            id="otherList"
            setAmount={setAmount} />

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

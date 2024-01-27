import React, { useEffect, useState } from 'react'
import styles from './ModalCart.module.css'
import LiqPayPage from '../LiqPayPage/LiqPayPage';


export default function ModalCart({ active, setActive, orders }) {
  const [data, setData] = useState()


  async function setOrders() {
    try {
      const response = await fetch('http://localhost:5000/api/Pay/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.values(orders)),
      });

      if (response.ok) {
        const data = await response.json();
        setData(data)
      } else {
        console.error('Произошла ошибка при отправке заказов');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }



  return (
    <>
      <div
        onClick={() => {
          setActive(false)
          setData(null)
        }}
        className={`${styles.modalWrapp} ${active ? styles.active : ''}`}>
        {data != null ? <LiqPayPage data={data} />
          : <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.modalContent} ${active ? styles.active : ''}`}>
            <table className={styles.ordertable}>
              <tr>
                <td>Кальян медиум</td>
                <td> 250&#8372;</td>
              </tr><tr>
                <td>Кальян хард</td>
                <td> 280&#8372;</td>
              </tr><tr>
                <td>Бургер стандарт</td>
                <td> 120&#8372;</td>
              </tr>
            </table>
            <div className={styles.payBlock}>
              <button onClick={setOrders}>Оплатить</button>
              <span>Загально: 555&#8372;</span>
            </div>
          </div>}

      </div></>

  )
}

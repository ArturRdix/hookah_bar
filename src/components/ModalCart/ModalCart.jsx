import React, { useEffect, useState } from 'react'
import styles from './ModalCart.module.css'
import LiqPayPage from '../LiqPayPage/LiqPayPage';


export default function ModalCart({ active, setActive, orders, setOrders, setAmount }) {
  const [data, setData] = useState()
  const [tableNumber, setTableNumber] = useState('');
  const [addition, setAddition] = useState('');

  async function setRequestOrders() {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/Pay/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            orders: Object.values(orders),
            tableNumber: tableNumber,
            description: addition,
          }),
      });
      if (response.ok) {
        const data = await response.json();
        setData(data)
        setOrders({})
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
            <div className={styles.headLogo}>
              <div className={styles.dashedLine}></div>
              <div className={styles.dashedLine}></div>
              <h2>HOOKAH BAR</h2>
              <div className={styles.dashedLine}></div>
              <div className={styles.dashedLine}></div>
            </div>
            <table className={styles.ordertable}>
              <tbody> 
                {Object.values(orders).map((e) => (
                <tr key={e.id}>
                  <td>{e.amount} x {e.item.title}</td>
                  <td>{e.item.price * e.amount}&#8372;</td>
                </tr>
              ))}</tbody>

            </table>
            <div className={styles.totalPriceText}>

              <span>Сума:</span>
              <span>
                {Object.values(orders)
                  .reduce((accumulator, currentValue) => (accumulator + (currentValue.amount * currentValue.item.price)), 0)}&#8372;
              </span>
            </div>
            <div className={styles.tableNomer}>
              <input
                className={styles.input}
                type="number"
                min="1"
                max="7"
                name=""
                placeholder='1'
                id="table"
                onChange={(e) => setTableNumber(e.target.value)}
              />
              <label htmlFor="table">Який номер столу? <span>(Вiд 1 до 7)</span></label>
            </div>
            <div className={styles.textareaBlock}>
              {/* <textarea placeholder='Додатковий коментар до замовлення (не обов`язково)'
                onChange={(e) => setAddition(e.target.value)}
              ></textarea> */}
               <span>На даний момент онлайн-оплата - не працює, ви можете використовувати кошик як підрахунок</span>
            </div>
            <div className={styles.payBlock}>
              <button disabled onClick={setRequestOrders}>Сплатити</button>
            </div>
          </div>}
      </div></>
  )
}


//Для кнопки, когда заработает оплата  disabled={!(parseInt(tableNumber) >= 1 && parseInt(tableNumber) <= 7)}
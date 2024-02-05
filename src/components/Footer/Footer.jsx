import React from 'react'
import { FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div>
        <address>
          Адреса бару: вул. Межова 98-А, м. П'ятихатки, Дніпропетровська обл.
        </address>
        <a target='_blank' href="https://www.instagram.com/hookah_bar_bro?igsh=aGw1OG1pdG84b2p5">
          <FaInstagram className={styles.instIcon} style={{ fontSize: '1.5em' }} />
          <p>hookah_bar_bro</p>
        </a>
      </div>
      <span>Пн-Нд 17:00-00:00</span>
    </footer>
  )
}

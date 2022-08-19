import React from 'react'
import styles from './header.module.scss';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <section className={styles.main}>
        <Navbar />
    </section>
  )
}

export default Header
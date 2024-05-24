import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>StudyMedia</div>
      <div className={styles.search_box}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Search material"
      />
      <FaSearch size={20} className={styles.search_icon} />
    </div>
      <ul>
          <Link to={'/'} className={styles.nav_items}>Home</Link>
          <Link to="/profile" className={styles.nav_items}>Profile</Link>
          <Link to="/features" className={styles.nav_items}>Features</Link>
          <Link to="/dashboard" className={styles.nav_items}>Dashboard</Link>
      </ul>
      <button className={styles.red}>Login/Register</button>
    </div>
  )
}

export default Navbar

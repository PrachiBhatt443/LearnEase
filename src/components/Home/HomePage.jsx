import React from 'react'
import styles from './Home.module.css'
import p from '../img/image1.png';
const HomePage = () => {
 
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.H1}>
            STUDY LIKE
        </div>
        <div className={styles.H5}>
            A <span className={styles.redText}>PRO</span>
        </div>
      </section>
      <img className={styles.IMG} src={p}/>
    </div>
  )
}
export default HomePage

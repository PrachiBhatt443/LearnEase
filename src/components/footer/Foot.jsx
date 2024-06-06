import React from 'react'
import styles from '../Home/Home.module.css'
const Foot = () => {
  return (
    <section  className={styles.footM} style={{'backgroundColor':'black'}} >
        @LearnEase
        <ul className={styles.foot}>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
    </section>
  )
}

export default Foot

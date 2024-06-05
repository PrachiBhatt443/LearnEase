import React from 'react'
import styles from './Home.module.css'
import p from '../img/brain.png';
import Foot from '../footer/Foot';
import TestList from './Quiz/TestList';
const WeeklyQuiz = () => {
  return (
    <>
     <div className={styles.main}>
           <section>
          <div className={styles.H1}>
              PRACTICE YOUR
          </div>
          <div className={styles.H5}>
              <span className={styles.redText}>PREPRATION</span>
          </div>
        </section>
        <img className={styles.IMG} src={p}/>
      </div>
      <TestList/>
      <Foot/>
    </> 
  )
}

export default WeeklyQuiz

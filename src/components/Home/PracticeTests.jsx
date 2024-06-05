import React from 'react'
import styles from './Home.module.css'
import p from '../img/brain.png';
// import Features from './Features';
import Foot from '../footer/Foot';
import GateTestPractice from './Gate/GateTestPractice';
const PracticeTests = () => {
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
      <GateTestPractice/>
      <Foot/>
    </>   
   
  )
}
export default PracticeTests

import React from 'react'
import styles from './Home.module.css'
import p from '../img/image1.png';
import Explore from './Explore';
// import Features from './Features';
import Footer from '../footer/Footer';
import Features2 from './Features2';
const HomePage = () => {
  return (
    <>
     <div className={styles.main}>
        <section>
          <div className={styles.H1}>
              STOP DREAMING
          </div>
          <div className={styles.H5}>
              <span className={styles.redText}>START DOING</span>
          </div>
        </section>
        <img className={styles.IMG} src={p}/>
      </div>
      <Explore/>
      <Features2/>
      <Footer/>
    </>
   
  )
}
export default HomePage

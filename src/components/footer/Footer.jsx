import React from 'react'
// import styles from './Home.module.css'
import p from '../img/image1.png';
import styles from '../Home/Home.module.css'
import Foot from './Foot';
const Footer = () => {
 
  return (
    <>
     <div style={{'backgroundColor':'black','height':'341px'}}>
      <section>
        <div className={styles.footH}>
            READY FOR YOUR
        </div>
        <div className={styles.footH5}>
            PREPRATION ?
        </div>
      </section>
      <Foot/>

    </div>
    </>
   
  )
}
export default Footer

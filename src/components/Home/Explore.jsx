import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Explore = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.explorecontainer}>
      <section className={styles.row}>Explore Notes and Tools</section>
      <section className={styles.row}>
        <div className={styles.centered} onClick={() => handleNavigation('/studymaterial')}>Study material</div>
        <div className={styles.centered} onClick={() => handleNavigation('/practicetests')}>Practice tests</div>
        <div className={styles.centered} onClick={() => handleNavigation('/onlinecompiler')}>Online compiler</div>
      </section>
      <section className={styles.row}>
        <div className={styles.centered} onClick={() => handleNavigation('/weeklyquiz')}>Weekly Quiz</div>
        <div className={styles.centered} onClick={() => handleNavigation('/uploadpersonal')}>Upload files</div>
        <div className={styles.centered} onClick={() => handleNavigation('/newsupdates')}>News & Updates</div>
      </section>
      <section className={styles.row}>
        <button className={styles.centered} onClick={() => handleNavigation('/getstarted')}>Get started</button>
      </section>
    </div>
  );
};

export default Explore;

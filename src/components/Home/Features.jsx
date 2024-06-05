import styles from './Home.module.css'
import React, { useState, useEffect } from 'react';
import p from '../img/image2.png';
import q from '../img/img1.png';
import r from '../img/img2.png'
import s from '../img/img3.png'
const Features = () => {
  const features = [
    {
      id: 1,
      text: 'Find all relevant study materials for your courses',
      image: p,
      backgroundColor: '#f0f0f0',
    },
    {
      id: 2,
      text: 'Practice more efficiently for placements',
      image: q,
      backgroundColor: '#e0e0f0', // Light blue color
    },
    {
      id: 3,
      text: 'Find answers to your questions in our community',
      image: r,
      backgroundColor: '#f0e0e0', // Light blue color
    },
    {
      id: 4,
      text: 'Share your study materials and earn badges',
      image: s,
      backgroundColor: '#e0f0e0', // Light blue color
    },
  ];
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextFeature = (currentFeature + 1) % features.length;
      setCurrentFeature(nextFeature);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentFeature, features.length]);
  return (
    // <div className={styles.f}>
    //   <img className={styles.fIMG} src={p}/>
    //   <section>
    //     <div className={styles.fH1}>
    //         Features of LEARNEASE
    //     </div>
    //     <div className={styles.ftext}>
    //     Unlock your academic potential with our platform designed for college students. Access notes, test series for college and competitive exams, and track your progress with our user-friendly dashboard. Practice coding with our online compiler, empowering you to excel in your studies effortlessly. Join us to make learning easier and more effective
    //     </div>
    //   </section>
      
    // </div>
    <>
    <div className={styles.fH5}>
        College Studying has never been easier
      </div>
      <div className={styles.featurecontainer}>
        <div className={styles.featuretext}>
          <ul>
            {features.map((feature, index) => (
              <li
                key={feature.id}
                style={{
                  backgroundColor: currentFeature === index ? '#add8e6' : '#f0f0f0',
                }}
              >
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.featureimage}>
          <img src={features[currentFeature].image} alt={`Feature ${currentFeature + 1}`} />
        </div>
      </div>
    </>
  )
}

export default Features






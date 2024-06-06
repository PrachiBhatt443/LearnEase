// GateTestPractice.jsx
import React from 'react';
import styles from './GateTestPractice.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const tests = [
  { id: 1, title: 'GATE Test 1' },
  { id: 2, title: 'GATE Test 2' },
  { id: 3, title: 'GATE Test 3' },
  { id: 4, title: 'GATE Test 4' },
  // Add more tests as needed
];

const GateTestPractice = () => {
  const navigate = useNavigate();

  const handleTestClick = (id) => {
    navigate(`/test/${id}`);
  };

  return (
    <div className={styles.container}>
      {tests.map((test) => (
        <div key={test.id} className={styles.card}>
          <div className={styles.cardTitle}>{test.title}</div>
          <button
            className={styles.cardButton}
            onClick={() => handleTestClick(test.id)}
          >
            Take Test <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default GateTestPractice;

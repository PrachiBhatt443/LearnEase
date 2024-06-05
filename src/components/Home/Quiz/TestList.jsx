import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Quiz.module.css';

const TestList = () => {
    const tests = [
      { name: 'DBMS', path: '/quiz/dbms' },
      { name: 'OS', path: '/quiz/os' },
      { name: 'CN', path: '/quiz/cn' },
      { name: 'Java', path: '/quiz/java' }
    ];
  
    return (
      <div className={styles.testListContainer}>
        <h1>Available Tests</h1>
        <ul className={styles.testList}>
          {tests.map((test, index) => (
            <li key={index} className={styles.testItem}>
              <span>{test.name}</span>
              <Link to={test.path}>
                <button className={styles.startBtn}>Start</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TestList;
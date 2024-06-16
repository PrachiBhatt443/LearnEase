import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data for charts (replace with your actual data)
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Quiz Performance (%)',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  return (
    <div className={styles.dashboard}>
      <h2>Welcome to Your Dashboard</h2>
      <div className={styles.grid}>
        <Link to="/studymaterial" className={styles.card}>
          <h3>Study Material</h3>
          <p>Access and upload study notes.</p>
        </Link>
        <Link to="/practicetests" className={styles.card}>
          <h3>Practice Tests</h3>
          <p>Prepare for exams with practice tests.</p>
        </Link>
        <Link to="/gate" className={styles.card}>
          <h3>GATE Test Practice</h3>
          <p>Practice GATE papers.</p>
        </Link>
        <Link to="/weeklyquiz" className={styles.card}>
          <h3>Weekly Quiz</h3>
          <p>Attempt weekly quizzes.</p>
        </Link>
        <Link to="/onlinecompiler" className={styles.card}>
          <h3>Online Compiler</h3>
          <p>Practice coding with an online compiler.</p>
        </Link>
        <Link to="/uploadpersonal" className={styles.card}>
          <h3>Upload Personal</h3>
          <p>Upload personal notes and documents.</p>
        </Link>
        <div className={`${styles.card} ${styles.chartCard}`}>
          <h3>Quiz Performance</h3>
          <Bar
            data={barChartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

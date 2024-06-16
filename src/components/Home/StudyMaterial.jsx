import React from 'react';
import styles from './StudyMaterial.module.css'; // Import CSS module stylesheet

const studyMaterials = [
  {
    id: 1,
    title: "Database Management Systems",
    description: "Comprehensive notes on DBMS.",
    link: "#"
  },
  {
    id: 2,
    title: "Operating Systems",
    description: "In-depth study materials on OS concepts.",
    link: "#"
  },
  {
    id: 3,
    title: "Computer Networks",
    description: "Notes covering all major topics in Computer Networks.",
    link: "#"
  },
  // Add more study materials here
];

const StudyMaterial = () => {
  return (
    <div className={styles.container}>
      <h2>Study Materials</h2>
      <div className={styles.grid}>
        {studyMaterials.map(material => (
          <div key={material.id} className={styles.card}>
            <h3>{material.title}</h3>
            <p>{material.description}</p>
            <a href={material.link} className={styles.button} target="_blank" rel="noopener noreferrer">View Material</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyMaterial;

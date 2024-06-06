// TestDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const TestDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Test Detail for Test {id}</h1>
      {/* Add more detailed test information here */}
    </div>
  );
};

export default TestDetail;

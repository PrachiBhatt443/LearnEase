import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap';
import './global.css'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       <App />
    </Router>

  </React.StrictMode>,
)

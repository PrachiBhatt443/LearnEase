// App.jsx
import React from 'react';
import { Route, Routes, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nabar/Navbar';
import Dashboard from './components/Dashboard';
import Features from './components/Home/Features';
import Profile from './components/Profile';
import HomePage from './components/Home/HomePage';
import StudyMaterial from './components/Home/StudyMaterial';
import PracticeTests from './components/Home/PracticeTests';
import OnlineCompiler from './components/Home/Code/OnlineCompiler';
import WeeklyQuiz from './components/Home/WeeklyQuiz';
import UploadPersonal from './components/Home/Upload/Uploadpersonal';
import NewsUpdates from './components/Home/NewsUpdates';
import GetStarted from './components/Home/GetStarted';
import Explore from './components/Home/Explore';
import FileU from './components/Home/Upload/FileU';
import TestList from './components/Home/Quiz/TestList';
import QuizApp from './components/Home/Quiz/QuizApp';
import GateTestPractice from './components/Home/Gate/GateTestPractice';
import TestDetail from './components/Home/Gate/TestDetail';
import 'primereact/resources/themes/saga-blue/theme.css';  // or any other theme you prefer
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const dbmsQuestions = [
  {
    question: "What does DBMS stand for?",
    answers: [
      { text: "Database Management System", correct: true },
      { text: "Data Management System", correct: false },
      { text: "Database Manipulation System", correct: false },
      { text: "Data Based Management System", correct: false },
    ]
  },
  // More questions
];

const osQuestions = [
  // Add OS questions here
];

const cnQuestions = [
  // Add CN questions here
];

const javaQuestions = [
  // Add Java questions here
];

function App() {
  const location = useLocation();

  // Determine if current path is '/onlinecompiler'
  const isOnlineCompilerPage = location.pathname === '/onlinecompiler';
  const isQuiz = location.pathname.startsWith('/quiz');
  return (
    <>
      {(!isOnlineCompilerPage && !isQuiz) ? <Navbar /> : null}

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features" element={<Features />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />
        <Route path="/practicetests" element={<PracticeTests />} />
        <Route path="/onlinecompiler" element={<OnlineCompiler />} />
        <Route path="/weeklyquiz" element={<WeeklyQuiz />} />
        <Route path="/uploadpersonal" element={<UploadPersonal />} />
        <Route path="/newsupdates" element={<NewsUpdates />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/testlist" element={<TestList />} />
        <Route path="/quiz/dbms" element={<QuizApp questions={dbmsQuestions} />} />
        <Route path="/quiz/os" element={<QuizApp questions={osQuestions} />} />
        <Route path="/quiz/cn" element={<QuizApp questions={cnQuestions} />} />
        <Route path="/quiz/java" element={<QuizApp questions={javaQuestions} />} />
        <Route path="/gate" element={<GateTestPractice />} />
        <Route path="/test/:id" element={<TestDetail />} />
      </Routes>
    </>
  );
}

export default App;

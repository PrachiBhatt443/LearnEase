import React, { useState, useEffect } from 'react';
// import './QuizApp.css';

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
  // Add more questions here
];

const DBMSQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    document.getElementById('next-btn').innerHTML = 'Next';
    showQuestion();
  };

  const showQuestion = () => {
    resetState();
    let currentQuestion = dbmsQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    document.getElementById('question').innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      document.getElementById('answer-buttons').appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  };

  const resetState = () => {
    document.getElementById('next-btn').style.display = "none";
    while (document.getElementById('answer-buttons').firstChild) {
      document.getElementById('answer-buttons').removeChild(document.getElementById('answer-buttons').firstChild);
    }
  };

  const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      setScore(score + 1);
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(document.getElementById('answer-buttons').children).forEach(button => {
      if (button.dataset.correct === 'true') {
        button.classList.add('correct');
      }
      button.disabled = true;
    });
    document.getElementById('next-btn').style.display = 'block';
  };

  const showScore = () => {
    resetState();
    document.getElementById('question').innerHTML = `You scored ${score} out of ${dbmsQuestions.length}`;
    document.getElementById('next-btn').innerHTML = "Play Again";
    document.getElementById('next-btn').style.display = "block";
  };

  const handleNextButton = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex < dbmsQuestions.length - 1) {
      showQuestion();
    } else {
      showScore();
    }
  };

  return (
    <div className="app">
      <h1>DBMS Quiz</h1>
      <div className="quiz">
        <h2 id="question">Question is shown here</h2>
        <div id="answer-buttons" className="btn-container"></div>
        <button id="next-btn" onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default DBMSQuiz;

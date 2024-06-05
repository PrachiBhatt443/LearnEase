import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css';

const QuizApp = ({ questions }) => {
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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    document.getElementById('question').innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add(styles.btn);
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
      selectedBtn.classList.add(styles.correct);
      setScore(score + 1);
    } else {
      selectedBtn.classList.add(styles.incorrect);
    }
    Array.from(document.getElementById('answer-buttons').children).forEach(button => {
      if (button.dataset.correct === 'true') {
        button.classList.add(styles.correct);
      }
      button.disabled = true;
    });
    document.getElementById('next-btn').style.display = 'block';
  };

  const showScore = () => {
    resetState();
    document.getElementById('question').innerHTML = `You scored ${score} out of ${questions.length}`;
    document.getElementById('next-btn').innerHTML = "Play Again";
    document.getElementById('next-btn').style.display = "block";
  };

  const handleNextButton = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex < questions.length - 1) {
      showQuestion();
    } else {
      showScore();
    }
  };

  return (
    <div className={styles.app}>
      <h1>Quiz</h1>
      <div className={styles.quiz}>
        <h2 id="question">Question is shown here</h2>
        <div id="answer-buttons" className={styles.btnContainer}></div>
        <button id="next-btn" onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default QuizApp;

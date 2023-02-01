import { faS } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

function ReactQ() {
    const questions = [
        {
          questionText: "Who created React.js?",
          answerOptions: [
            { answerText: "Jordan Mike", isCorrect:false},
            { answerText: "Jordan Walke", isCorrect: true },
            { answerText: "Tim Lee", isCorrect: false},
            { answerText: "Jordan Lee", isCorrect: false },
          ],
        },
        {
          questionText: "In which language is React.js written",
          answerOptions: [
            { answerText: "Python", isCorrect:false },
            { answerText: "JavaScript", isCorrect: true },
            { answerText: "Java", isCorrect: false },
            { answerText: "PHP", isCorrect: false },
          ],
        },
        {
          questionText: "What is Babel?",
          answerOptions: [
            { answerText: "Virus", isCorrect: false },
            { answerText: "JavaScript Transpiler", isCorrect: true },
            { answerText: "Worm", isCorrect: false },
            { answerText: "Spyware", isCorrect: false },
          ],
        },
        {
          questionText: "How many elements can a valid react component return?",
          answerOptions: [
            { answerText: "0001", isCorrect: true },
            { answerText: "0010", isCorrect: false },
            { answerText: "0011", isCorrect: false },
            { answerText: "0100", isCorrect: false },
          ],
        },
        {
            questionText: "What are arbitrary inputs of components in react also known as?",
            answerOptions: [
              { answerText: "Elements", isCorrect: false },
              { answerText: "Props", isCorrect: true },
              { answerText: "Keys", isCorrect: false },
              { answerText: "Ref", isCorrect: false },
            ],
          },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        } 
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
      return (<center style={{marginTop:'10rem'}}>
        <div className="app">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div></center>
      );
}

export default ReactQ

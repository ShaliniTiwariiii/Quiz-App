import React, { useState,useEffect } from 'react'
import swal from 'sweetalert'
import './JsQuizz.css'
function JSquizz() {
    const questions = [
        {
          questionText: "Which statement cannot be used to declare a variable in JavaScript?",
          answerOptions: [
            { answerText: "int", isCorrect: true },
            { answerText: "var", isCorrect: false },
            { answerText: "const", isCorrect: false },
            { answerText: "let", isCorrect: false },
          ],
        },
        {
          questionText: " Which of the following is block scoped?",
          answerOptions: [
            { answerText: "var", isCorrect: false },
            { answerText: "let", isCorrect: false },
            { answerText: "const", isCorrect: false },
            { answerText: "both b and c", isCorrect: true },
          ],
        },
        {
          questionText: "What will ‘0 == false ’ evaluate to",
          answerOptions: [
            { answerText: "Null", isCorrect: false },
            { answerText: "undefined", isCorrect: false },
            { answerText: "Throws error", isCorrect: false },
            { answerText: "True", isCorrect: true },
          ],
        },
        {
          questionText: "Which of the following is an array method?",
          answerOptions: [
            { answerText: "Map", isCorrect: false },
            { answerText: "Filter", isCorrect: false },
            { answerText: "Reduce", isCorrect: false },
            { answerText: "All of these", isCorrect: true },
          ],
        }, 
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
          swal({
            title: "Good job!",
            text: "Correct Answer",
            icon: "success",
          });
       

        }

    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
      return (  
        <center style={{marginTop:'10rem'}}>
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

export default JSquizz

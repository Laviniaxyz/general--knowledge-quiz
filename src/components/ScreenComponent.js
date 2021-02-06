import React, { useState } from 'react'
import './ScreenComponent.css'

const ScreenComponent = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)


  if (props.questions.length < 1) {
    return(
      <div className='screen'>
      </div>
    )
  } 
  else {
  //Concat all answers in an array and them sort them
  const allAnswers = [
    {answer: props.questions[currentQuestion].correct_answer, isCorrect: true},
    {answer: props.questions[currentQuestion].incorrect_answers[0], isCorrect: false},
    {answer: props.questions[currentQuestion].incorrect_answers[1], isCorrect: false},
    {answer: props.questions[currentQuestion].incorrect_answers[2], isCorrect: false}
    ]
    const sortedAnswers = allAnswers.sort()


    //What happens after the user selects an answer
    const inputClickHandler = (bool) => {
      if (bool === true) {
        setScore(score+1)
      }

      const nextQuestion = currentQuestion + 1
      if (nextQuestion < props.questions.length) {
        setCurrentQuestion(nextQuestion)
      } else {
        setShowScore(true)
      }
    }

  return(
    <div className='screen'>
    <div className='quiz-box'>
        {showScore?
           (<div className='question'>
             You scored {score} out of 10 questions!
           </div>)
        :
       ( 
       <div>
        <div className='question'>{props.questions[currentQuestion].question}</div>
          <div className className='answers'>
            {sortedAnswers.map((response, index) => (
              <div className='sg-answer' key={index} onClick={() => inputClickHandler(response.isCorrect)} >
                <label className='label' >{index+1}. {response.answer}</label>
              </div>
              ))}
          </div>
        </div>)
      }

    </div>
  </div>
  )
}
}

export default ScreenComponent
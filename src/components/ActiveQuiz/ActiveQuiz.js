import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = ( {question, answerNumber , quizLength, onAnswerClick, answers, stater} ) => {
  return (
    <div className={'ActiveQuiz'}>
      <p className={'Question'}>
      <span>
        <strong>{answerNumber}.</strong>&nbsp;
        {question}
      </span>

        <small>{answerNumber} из { quizLength }</small>
      </p>

      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        state={stater}
      />
    </div>
  )
}

export default ActiveQuiz
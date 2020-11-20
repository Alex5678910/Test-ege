import React from 'react'
import './AnswerItem.css'

const AnswerItem = ({onAnswerClick, answer, stater}) => {
    const cls = ['answerState AnswerItem']

    if (stater) {
        cls.push([stater])
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => onAnswerClick(answer.id)}
        >
            {answer.text}
        </li>
    )
}

export default AnswerItem
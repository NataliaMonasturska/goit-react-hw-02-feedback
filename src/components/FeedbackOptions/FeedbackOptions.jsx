import React from 'react'
import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map((option) => (
        <li key={option} className={css.feedbackItem}>
          <button
            onClick={() => onLeaveFeedback({ option })}
            className={css.btn}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import { Notification } from 'components/Notification/Notification'
import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      {total ? (
        <ul className={css.statisticsList}>
          <li className={css.statisticsItem}>Good: {good}</li>
          <li className={css.statisticsItem}>Neutral: {neutral}</li>
          <li className={css.statisticsItem}>Bad: {bad}</li>
          <li className={css.statisticsItem}>Total: {total}</li>
          <li className={css.statisticsItem}>
            Positive Feedback: {positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  )
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

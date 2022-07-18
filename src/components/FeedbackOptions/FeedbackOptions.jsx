import React  from "react";



export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive Feedback: {positivePercentage}%</li>
            </ul>
        </div>
    )

}






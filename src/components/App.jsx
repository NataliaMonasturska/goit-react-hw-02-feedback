import React, { Component } from "react";
import {Statistics } from 'components/Statistics/Statistics';




export class App extends Component {
  state = {
    good: 2,
    neutral: 4,
    bad: 4
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state;
    const persentage =  Math.round(good/(good + neutral + bad)*100);
    return persentage;                                
  }

  render() {
    return <div>
      <Statistics 
      good={this.state.good} 
      neutral={this.state.neutral} bad={this.state.bad} 
      total={this.countTotalFeedback()} 
      positivePercentage={this.countPositiveFeedbackPercentage()}/>

      <FeedbackOptions options={} onLeaveFeedback={}/>
    </div>;
  }
}






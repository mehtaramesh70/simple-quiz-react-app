import React,{Component} from 'react';
import './App.css';
import QuizPage from './components/QuizPage';

 export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quiz: [
        {
          question: "who won the icc world cup in 2011 ?",
          options: ["Australia", "India", "Sri Lanka","England"],
          answer: "India"
        },{
          question: "What is current year?",
          options: ["2022", "2021", "2019", "2020"],
          answer: "2020"
        },{
          question: "what is the current month",
          options: ["may", "July", "August", "June"],
          answer: "July"
        },{
          question: "which is fastest animal in the world?",
          options: ["Cheetah", "Rabit", "tiger", "deer"],
          answer: "1"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <QuizPage quiz={this.state.quiz}/>
      </div>
    );
  }
}



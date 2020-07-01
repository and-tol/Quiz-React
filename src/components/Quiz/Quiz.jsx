import React, { Component } from 'react';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';
// import { state } from '../../data/data';
import { data } from '../../data/data';

export class Quiz extends Component {
  state = {
    results: {}, // {[id]: "success" || "errror"}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: "success" || "errror"}
  };

  onAnswerClickHandler = (answerId) => {
    console.log('answerId>>', answerId);

    const question = data.quiz[this.state.activeQUestion];

    if (question.rightAnswerId === answerId) {
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === data.quiz.length;
  }

  render() {
    return (
      <div
        className='flex justify-center flex-col flex-grow p-24'
        style={{ width: '700px' }}
      >
        <h1 className='text-white'>Ответьте на все вопросы</h1>
        <div className='w-full'>
          <ActiveQuiz
            answers={data.quiz[this.state.activeQuestion].answers}
            id={data.quiz[this.state.activeQuestion].id}
            question={data.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={data.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

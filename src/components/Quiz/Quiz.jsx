import React, { Component } from 'react';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';
// import { state } from '../../data/data';
import { data } from '../../data/data';

export class Quiz extends Component {
  state = {
    results: {}, // {[id]: "success" || "errror"}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // информация о текущем ответе пользователя {[id]: "success" || "errror"}
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = data.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: 'success' },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 2000);
    } else {
      this.setState({
        answerState: { [answerId]: 'error' },
      });
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
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';
import { FinishedQuiz } from '../FinishedQuiz/FinishedQuiz';
// import { state } from '../../data/data';
import { data } from '../../data/data';

class Quiz extends Component {
  state = {
    results: {}, // {[id]: "success" || "error"}
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
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === data.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div
        className='flex justify-center flex-col flex-grow p-24'
        style={{ width: '700px' }}
      >
        <h1 className='text-white'>Ответьте на все вопросы</h1>
        <div className='w-full'>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={data.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={data.quiz[this.state.activeQuestion].answers}
              id={data.quiz[this.state.activeQuestion].id}
              question={data.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={data.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export { Quiz };

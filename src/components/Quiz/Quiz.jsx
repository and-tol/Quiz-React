import React, { Component } from 'react';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';
import { FinishedQuiz } from '../FinishedQuiz/FinishedQuiz';
import { Loader } from '../../UI/Loader/Loader';
// import { state } from '../../data/data';
// import { data } from '../../data/data';
import axios from '../../utils/axios-quiz';

class Quiz extends Component {
  state = {
    results: {}, // {[id]: "success" || "error"}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // информация о текущем ответе пользователя {[id]: "success" || "errror"}
    quiz: [],
    loading: true,
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
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
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    });
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `quizes/${this.props.match.params.id}.json`
      );
      const quiz = response.data;

      this.setState({
        quiz,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
    console.log('Quiz ID', this.props.match.params.id);
  }

  render() {
    return (
      <div
        className='flex justify-center flex-col flex-grow p-24'
        style={{ width: '700px' }}
      >
        <h1 className='text-white'>Ответьте на все вопросы</h1>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className='w-full'>
            {this.state.isFinished ? (
              <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
            ) : (
              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                id={this.state.quiz[this.state.activeQuestion].id}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export { Quiz };

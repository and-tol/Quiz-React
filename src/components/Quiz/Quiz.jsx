import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';
import { FinishedQuiz } from '../FinishedQuiz/FinishedQuiz';
import { Loader } from '../../UI/Loader/Loader';

import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
} from '../../store/actions/quiz';

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }

  render() {
    return (
      <div
        className='flex justify-center flex-col flex-grow p-24'
        style={{ width: '700px' }}
      >
        <h1 className='text-white'>Ответьте на все вопросы</h1>
        {this.props.loading || !this.props.quiz ? (
          <Loader />
        ) : (
          <div className='w-full'>
            {this.props.isFinished ? (
              <FinishedQuiz
                results={this.props.results}
                quiz={this.props.quiz}
                onRetry={this.props.retryQuiz}
              />
            ) : (
              <ActiveQuiz
                answers={this.props.quiz[this.props.activeQuestion].answers}
                id={this.props.quiz[this.props.activeQuestion].id}
                question={this.props.quiz[this.props.activeQuestion].question}
                onAnswerClick={this.props.quizAnswerClick}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.quiz.results, // {[id]: "success" || "error"}
  isFinished: state.quiz.isFinished,
  activeQuestion: state.quiz.activeQuestion,
  answerState: state.quiz.answerState, // информация о текущем ответе пользователя {[id]: "success" || "errror"}
  quiz: state.quiz.quiz,
  loading: state.quiz.loading,
});

const mapDispatchToProps = {
  fetchQuizById: (id) => fetchQuizById(id),
  quizAnswerClick: (answerId) => quizAnswerClick(answerId),
  retryQuiz: () => retryQuiz(),
};
// const mapDispatchToProps = (dispatch) => ({
//   fetchQuizById: (id) => dispatch(fetchQuizById(id)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

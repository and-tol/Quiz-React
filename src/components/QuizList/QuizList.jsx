import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loader } from '../../UI/Loader/Loader';
import { fetchQuizes } from '../../store/actions/quiz';

class QuizList extends Component {
  renderQuizes() {
    return this.props.quizes.map((quiz) => (
      <li key={quiz.id} className='mb-3'>
        <NavLink
          to={`/quiz/${quiz.id}`}
          className='no-underline text-white hover:text-orange-600'
        >
          {quiz.name}
        </NavLink>
      </li>
    ));
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  render() {
    return (
      <div className='Section GuizList'>
        <section>
          <h1 className='text-white'>Список тестов</h1>

          {this.props.loading && this.props.quizes.length !== 0 ? (
            <Loader />
          ) : (
            <ul>{this.renderQuizes()}</ul>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quizes: state.quiz.quizes,
  loading: state.quiz.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuizes: () => dispatch(fetchQuizes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);

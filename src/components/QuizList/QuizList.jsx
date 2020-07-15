import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index} className='mb-3'>
          <NavLink
            to={`/quiz/${quiz}`}
            className='no-underline text-white hover:text-orange-600'
          >
            Тест {quiz}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className='Section GuizList'>
        <section>
          <h1 className='text-white'>Список тестов</h1>
          <ul>{this.renderQuizes()}</ul>
        </section>
      </div>
    );
  }
}

export { QuizList };

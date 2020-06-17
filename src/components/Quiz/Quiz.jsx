import React, { Component } from 'react';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';
import { state } from '../../data/data';

export class Quiz extends Component {
  render() {
    return (
      <div className='flex justify-center flex-col flex-grow p-24' style={{ width: '700px' }}>
        <h1 className='text-white'>Ответьте на все вопросы</h1>
        <div className='w-full'>
          <ActiveQuiz answers={state.quiz[0].answers}/>
        </div>
      </div>
    );
  }
}

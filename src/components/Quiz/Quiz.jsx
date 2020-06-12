import React, { Component } from 'react';
import { ActiveQuiz } from './ActiveQuiz/ActiveQuiz';

export class Quiz extends Component {
  render() {
    return (
      <div className='flex justify-center flex-col flex-grow p-24' style={{width: '600px'}}>
        <h1 className='text-white'>Quiz</h1>
        <div className='w-full'>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}

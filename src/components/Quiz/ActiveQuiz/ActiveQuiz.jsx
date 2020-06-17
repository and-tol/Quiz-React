import React from 'react';
import { AnswersList } from './AnswersList/AnswersList';

export const ActiveQuiz = (props) => {

  return (
    <div className='p-5 text-white border-4 border-solid border-white rounded-lg my-3 box-border'>
      <div className='flex justify-between'>
        <p className='mb-3'>
          <span className='font-medium'>1. </span> Как дела?
        </p>
        <small>4 из 12</small>
      </div>

      <AnswersList answers={props.answers} />
    </div>
  );
};

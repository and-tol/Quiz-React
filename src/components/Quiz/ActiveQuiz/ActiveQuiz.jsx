import React from 'react';
import { AnswersList } from './AnswersList/AnswersList';

export const ActiveQuiz = (props) => {

  return (
    <div className='p-5 text-white border-4 border-solid border-white rounded-lg my-3 box-border'>
      <div className='flex justify-between'>
        <p className='mb-3'>
          <span className='font-medium'>1. </span> {props.question}
        </p>
        <span className=' w-24 text-right align-baseline'>
          {props.answerNumber} из {props.quizLength}
        </span>
      </div>

      <AnswersList
        answers={props.answers}
        id={props.id}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};


// width: 90px;
// display: block;
// text-align: end;
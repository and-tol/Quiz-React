import React from 'react';

export const ActiveQuiz = (props) => {

  return (
    <div className='p-5 text-white border-4 border-solid border-white rounded-sm my-3 box-border'>
      <div className='flex justify-between'>
        <p>
          <span className='font-medium'>1. </span> Как дела?
        </p>
        <small>4 из 12</small>
      </div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

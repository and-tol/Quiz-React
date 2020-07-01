import React from 'react';

export const AnswerItem = (props) => {
  return (
    <li
      className='border border-solid border-white rounded py-1 px-2 mb-1 cursor-pointer hover:bg-indigo-300 transition-colors duration-300 ease-in-out'
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

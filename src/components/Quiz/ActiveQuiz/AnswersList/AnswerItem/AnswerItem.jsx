import React from 'react';

export const AnswerItem = (props) => {
  console.log('props', props)

  const classes = ['answer-item'];

  if (props.state) {
    classes.push(`${props.state}`);
  }

  return (
    <li
      className={`${classes.join(' ')} hover:bg-indigo-300`}
      // className='border border-solid border-white rounded py-1 px-2 mb-1 cursor-pointer hover:bg-indigo-300 transition-colors duration-300 ease-in-out'
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

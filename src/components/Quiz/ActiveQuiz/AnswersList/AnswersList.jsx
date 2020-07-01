import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';

export const AnswersList = (props) => {
  return (
    <ul>
      {props.answers.map((answer, index) => (
        <AnswerItem
          key={answer.id}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
        />
      ))}
    </ul>
  );
};

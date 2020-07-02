import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';

export const AnswersList = (props) => {
  return (
    <ul>
      {props.answers.map((answer) => (
        <AnswerItem
          key={answer.id}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      ))}
    </ul>
  );
};

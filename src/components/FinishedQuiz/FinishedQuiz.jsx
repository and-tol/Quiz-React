import React from 'react';
import { Button } from "./../../UI/Button/Button";

const FinishedQuiz = (props) => {

  const succesCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key]=== 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <section className='p-5 text-white border-2 border-white border-solid rounded-md box-border my-0'>
      <h2>Finished</h2>
      <ul className='finished'>
        {props.quiz.map((quizItem, index) => {
          const classes = [
            'fa',
            props.results[quizItem.id] === 'error'
              ? 'fa-times error-i'
              : 'fa-check success-i',
          ];
          return (
            <li key={quizItem.id}>
              <span>{index + 1}. </span> &nbsp;
              {quizItem.question}
              <i className={classes.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p className='py-2 mb-2'>
        Правильно {succesCount} из {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRetry} type='primary'>
          Повторить
        </Button>
        <Button type='success-i'>
          Перейти в список тестов
        </Button>

      </div>
    </section>
  );
};

export { FinishedQuiz };

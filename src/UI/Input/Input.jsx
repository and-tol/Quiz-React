import React from 'react';
import { isInvalid } from '../../helpers/helpers';

// const isInvalid = ({ valid, touched, shouldValidate }) => !valid && shouldValidate && touched;

export function Input(props) {
  const inputType = props.type || 'text';
  const classes = ['Input'];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    classes.push('invalid');
  }

  return (
    <div className={classes.join(' ')}>
      <label className='mb-1 p-0 block font-semibold' htmlFor={htmlFor}>
        {props.label}
      </label>
      <input
        className='block box-border border border-solid divide-orange-200 p-2 mx-0 mb-1 w-full outline-none transition-all duration-300 ease-in-out'
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <span className='text-red-500 text-xs italic'>
          {props.errorMessage || 'Введите верное значение'}
        </span>
      ) : null}
    </div>
  );
}

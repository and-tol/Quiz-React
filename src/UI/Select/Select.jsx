import React from 'react';

export const Select = (props) => {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className='mb-4'>
      <label className='m-0 mb-1 p-0 font-bold block' htmlFor={htmlFor}></label>
      <select
        className='block box-border border border-solid border-orange-200 m-0 mb-1 w-full h-8 outline-none transition-all duration-300 ease-in-out'
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

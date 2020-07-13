import React from 'react';

const Backdrop = (props) => {
  return (
    <div
      className='z-20 bg-black bg-opacity-75 fixed inset-0'
      onClick={props.onClick}
    ></div>
  );
};

export { Backdrop };

import React from 'react';

const Button = (props) => {
  const classes = ['btn', `${props.type}`];
  // 'btn-tail'

  return (
    <button
      onClick={props.onClick}
      className={classes.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export { Button };

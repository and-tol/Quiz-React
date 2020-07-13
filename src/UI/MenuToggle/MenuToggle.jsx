import React from 'react';

const MenuToggle = (props) => {
  const classes = ['fa', 'menu-toggle'];

  if (props.isOpen) {
    classes.push('fa-times');
    classes.push('open');
  } else {
    classes.push('fa-bars');
  }

  return <i className={classes.join(' ')} onClick={props.onToggle}></i>;
};

export { MenuToggle };

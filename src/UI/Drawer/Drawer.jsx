import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Backdrop } from '../Backdrop/Backdrop';

const links = [
  { to: '/', label: 'Список', exact: true },
  { to: '/auth', label: 'Авторизация', exact: false },
  { to: '/quiz-creator', label: 'Создать тест', exact: false },
];

class Drawer extends Component {
  clickHandler =() => {
    this.props.onClose()
  }
  
  renderLinks() {
    return links.map((link, index) => {
      return (
        <div key={index} className='mb-4'>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName='opacity-75'
            className='relative text-teal-600 text-3xl no-underline bg-white pt-0 pb-3 py-5 transition-opacity duration-300 ease-in hover:bg-opacity-75 focus:bg-opacity-75'
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </div>
      );
    });
  }

  render() {
    const classes = ['drawer'];

    if (!this.props.isOpen) {
      classes.push('close');
    }

    return (
      <>
        <nav className={classes.join(' ')}>{this.renderLinks()}</nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClick} /> : null}
      </>
    );
  }
}

export { Drawer };

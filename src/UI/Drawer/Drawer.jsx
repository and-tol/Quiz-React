import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Backdrop } from '../Backdrop/Backdrop';

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
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

    const links = [
      { to: '/', label: 'Список', exact: true },
    ];

    if (this.props.isAuthenticated) {
    links.push(
      { to: '/quiz-creator', label: 'Создать тест', exact: false },
      { to: '/logout', label: 'Выйти', exact: false }
    );
    } else { links.push({ to: '/auth', label: 'Авторизация', exact: false }); }

    return (
      <>
        <nav className={classes.join(' ')}>{this.renderLinks(links)}</nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClick} /> : null}
      </>
    );
  }
}

export { Drawer };

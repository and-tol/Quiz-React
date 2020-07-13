import React, { Component } from 'react';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { Drawer } from '../Drawer/Drawer';

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className='flex flex-col h-screen bg-teal-400'>
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main className='flex flex-col flex-grow items-center'>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export { Layout };

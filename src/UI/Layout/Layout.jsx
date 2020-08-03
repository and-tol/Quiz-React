import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MenuToggle } from '../MenuToggle/MenuToggle';
import { Drawer } from '../Drawer/Drawer';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };
  }

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
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />

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

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
});

export default connect(mapStateToProps)(Layout);

import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

import MobileMenu from './mobileMenu'
import { Drawer, Button, Icon } from 'antd';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

class Navbar extends Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menu mb-4">
        
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <MenuRoundedIcon />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <MobileMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;

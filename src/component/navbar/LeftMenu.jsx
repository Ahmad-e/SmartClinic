
import React, { Component } from 'react';
import { Menu } from 'antd';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu =(props)=> {

    const { t } = useTranslation();
    return (
      <Menu style={{ background:"none"  }} mode={props.mode}>
        <span className='nav-item' key="alipay">
          <a className='menu__logo_test' href="/"> 3Dental </a>
        </span>
        <span className='nav-item' key="mail">
          <a className='nav-link' href="/">{ t("home")}</a>
        </span>
        <span className='nav-item' key="alipay">
          <a className='nav-link' href="#"> { t("Contact_us")} </a>
        </span>
      </Menu>
      
    );
  }


export default LeftMenu;

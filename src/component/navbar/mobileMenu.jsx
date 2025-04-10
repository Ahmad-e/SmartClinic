
import { Menu } from 'antd';
import AppButton from '../button';
import { Button, Dropdown, Space ,ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useCallback } from "react";
import { Padding } from '@mui/icons-material';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu =(props)=> {

  const changeLanguage=(lang)=>{
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
}

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer"  onClick={()=>changeLanguage("En")} >
          English
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={()=>changeLanguage("Ar")} >
          العربية
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer"  onClick={()=>changeLanguage("Tu")} >
          Türkçe
        </a>
      ),
    },
  ];

  const mode = useSelector((state) => state.mode);


  const {setLanguage,toggleMode,logout} = modeActions;
  const dispatch = useDispatch();
  const { t , i18n } = useTranslation();
    return (
      <div >
        <div className='nav-item' key="alipay">
          <a className='nav-link ' href="#"> LOGO </a>
        </div>
        <div className='nav-item' key="mail">
          <a className='nav-link' href="#">{ t("home")}</a>
        </div>
        <div className='nav-item' key="alipay">
          <a className='nav-link' href="#"> { t("Contact_us")} </a>
        </div>
        <div className='nav-item' key="alipay">
          <a className='nav-link' href="#"> { t("login") }</a>
        </div>
        <div className='nav-item' key="alipay">
          <AppButton  href="register" text={ t("register") } ></AppButton>
        </div>
        <div className='flex items-center'>
          <Button onClick={()=>dispatch(toggleMode())} color="default" variant="text">
            {
              mode==="dark" ? ( <SunOutlined className={'tuggle-button-'+mode}   /> ) : ( <MoonOutlined className={'tuggle-button-'+mode} /> )
            }
          </Button>
        </div>
        <div  className='pt-3'>
          <Space  direction="vertical">
              <Dropdown color="gray" menu={{ items }}  placement="bottomLeft">
                
                <Button color="default" variant="text">
                  <span className={'tuggle-button-'+mode} >
                    <svg  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GTranslateIcon" style={{ fontSize: "30px" , width:"1em" }}><path d="M21 4H11l-1-3H3c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8l1 3h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.35 0 2.48.5 3.35 1.3L9.03 8.57c-.38-.36-1.04-.78-2.03-.78-1.74 0-3.15 1.44-3.15 3.21S5.26 14.21 7 14.21c2.01 0 2.84-1.44 2.92-2.41H7v-1.71h4.68c.07.31.12.61.12 1.02C11.8 13.97 9.89 16 7 16m6.17-5.42h3.7c-.43 1.25-1.11 2.43-2.05 3.47-.31-.35-.6-.72-.86-1.1zm8.33 9.92c0 .55-.45 1-1 1H14l2-2.5-1.04-3.1 3.1 3.1.92-.92-3.3-3.25.02-.02c1.13-1.25 1.93-2.69 2.4-4.22H20v-1.3h-4.53V8h-1.29v1.29h-1.44L11.46 5.5h9.04c.55 0 1 .45 1 1z"></path></svg>  
                  </span>
                </Button>
               
                
              </Dropdown>
            
          </Space>
        </div>
      </div>
      
    );
  }

export default LeftMenu;

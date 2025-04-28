import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom'; // استيراد Link

const App = () => {
    const items = [
        { key: '1', icon: <PieChartOutlined />, label: 'Home', url: '/manager' },
        { key: '2', icon: <DesktopOutlined />, label: 'Option 2', url: '/option2' },
        { key: '3', icon: <ContainerOutlined />, label: 'Option 3', url: '/option3' },
        {
          key: 'sub1',
          label: 'Navigation One',
          icon: <MailOutlined />,
          children: [
            { key: '5', label: 'Option 5', url: '/option5' },
            { key: '6', label: 'Option 6', url: '/option6' },
            { key: '7', label: 'Option 7', url: '/option7' },
            { key: '8', label: 'Option 8', url: '/option8' },
          ],
        },
        {
          key: 'sub2',
          label: 'Navigation Two',
          icon: <AppstoreOutlined />,
          children: [
            { key: '9', label: 'Option 9', url: '/option9' },
            { key: '10', label: 'Option 10', url: '/option10' },
            {
              key: 'sub3',
              label: 'Submenu'
            },
          ],
        },
    ];

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const renderMenuItems = (items) => {
        return items.map(item => {
            if (item.children) {
                return {
                    ...item,
                    children: renderMenuItems(item.children),
                };
            }
            return {
                ...item,
                label: (
                    <Link to={item.url}>
                        {item.label}
                    </Link>
                ),
            };
        });
    };

    return (
        <div>
            <Button className='btn-nav-bar' type="primary" onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined className='text-xl' /> : <MenuFoldOutlined className='text-xl' />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                inlineCollapsed={collapsed}
                items={renderMenuItems(items)} // استخدام الدالة renderMenuItems
                className='text-sm'
            />
        </div>
    );
};

export default App;

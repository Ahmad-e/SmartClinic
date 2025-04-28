import React, { useState } from 'react';
import {
    UsergroupAddOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PhoneOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom'; // استيراد Link

const App = () => {
    const items = [
        { key: '1', icon: <PieChartOutlined  />, label: 'Home', url: '' },
        { key: '2', icon: <DesktopOutlined />, label: 'Option 2', url: '/option2' },
        { key: '3', icon: <ContainerOutlined />, label: 'Option 3', url: '/option3' },
        {
          key: 'sub1',
          label: 'Navigation One',
          icon: <PhoneOutlined />
        },
        {
          key: 'sub2',
          label: 'Navigation Two',
          url: 'users',
          icon: <UsergroupAddOutlined />
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

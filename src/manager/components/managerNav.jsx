import React, { useState } from 'react';
import {
    PhoneOutlined,
    ReconciliationOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  FilePdfOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom'; // استيراد Link
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();

    const items = [
        { key: '1', icon: <HomeOutlined />, label: t('home'), url: '/manager' },
        { key: '2', icon: <UsergroupAddOutlined />, label: t("All_patients"), url: '/manager/patients' },
        { key: '3', icon: <SolutionOutlined />, label: t("your_clinic"), url: '/manager/clinics' },
        { key: '4', icon: <UserSwitchOutlined />, label: t("Doctors"), url: '/manager/Doctors' },
        { key: '5', icon: <ReconciliationOutlined />, label: t("visites") , url: '/manager/visites/0' },
        { key: '6', icon: <FilePdfOutlined />, label: t("PDF_Setting"), url: '/manager/pdfSetting' },
        { key: '7', icon: <PhoneOutlined />, label: t("suppurt"), url: '/manager/support' },
        
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

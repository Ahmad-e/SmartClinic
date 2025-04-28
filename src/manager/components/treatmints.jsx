

import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeethDashbord from './teethDashbord'

import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

import SortedTable from './sorterTable'


  const handleMenuClick = e => {
    console.log('click', e);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />
    },
  ];
const Treatmints=()=> {

    var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return(
        <Container>
            <Row className='justify-center py-3'>
                <TeethDashbord />
                <Col lg={4} md={5} sm={12} >
                    <Row>
                        <Col lg={6} md={12} sm={6} xs={12}> 
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                        <Col lg={6} md={12} sm={6} xs={12}>
                            <Dropdown menu={{
                                items,
                                onClick: handleMenuClick,
                            }}>
                                
                                    <Space className='dropDown_diag'>
                                        <span>
                                            Missing
                                        </span>

                                        
                                        <DownOutlined />
                                    </Space>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='justify-center py-3'>
                <Col lg={12} xs={12}>
                    <SortedTable />
                </Col>

            </Row>
        </Container>
    )
}

export default Treatmints


import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeethDashbord from './teethDashbord'
import XRayImg from './xRayImg'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import {  Dropdown, message, Space} from 'antd';
import { Slider, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";
import SortedTable from './sorterTable';


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
    const teethData = useSelector((state) => state.teethData);
    const selectedTeeth = parseInt(useSelector((state) => state.selectedTeeth));
  
    const sinus_1 = useSelector((state) => state.sinus_1);
    const sinus_2 = useSelector((state) => state.sinus_2);

    var test_ = teethData[selectedTeeth].height
    const {setLine0Height,setSinus_1,setSinus_2,setLine1Height,setLine2Height,setTeethHeight} = modeActions;
    const dispatch = useDispatch();
    


    return(
        <Container>
            <Row className='justify-center pt-3'>
                <TeethDashbord />
                <Col lg={3} md={5} sm={12} >
                    <Row className='p-4' >
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                sinus line 1
                            </p>
                            <Slider max={40} min={-40} value={sinus_1} onChange={(e)=>dispatch(setSinus_1(e))} />
                        </Col>
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                sinus line 2
                            </p>
                            <Slider max={40} min={-40} value={sinus_2} onChange={(e)=>dispatch(setSinus_2(e))} />
                        </Col>
                        {/* <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                 line 1
                            </p>
                            <Slider max={30} min={-30} value={lin1Height} onChange={(e)=>dispatch(setLine1Height(e))} />
                        </Col>
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                line 2
                            </p>
                            <Slider max={30} min={-30} value={lin2Height} onChange={(e)=>dispatch(setLine2Height(e))} />
                        </Col> */}
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                height selected teeth
                            </p>
                            <Slider disabled={selectedTeeth===0} value={test_}  onChange={(e)=>dispatch(setTeethHeight(e))} max={0} min={-30}   />
                        </Col>
                        <Col lg={12}  xs={12}> 
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
                        <Col lg={12}  xs={12}>
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
                        <Col lg={12}  xs={12}>
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
                        <Col lg={12}  xs={12}>
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
                        <Col lg={12}  xs={12}>
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
                        <Col lg={12}  xs={12}>
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
                        <Col lg={12}  xs={12}>
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
                        <Col lg={12}  xs={12}>
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
            <XRayImg />
            <Row className='justify-center py-3'>
                <Col lg={12} xs={12}>
                    <SortedTable />
                </Col>

            </Row>
        </Container>
    )
}

export default Treatmints
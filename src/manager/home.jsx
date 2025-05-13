
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
    FileAddOutlined,
    UsergroupAddOutlined,
    SolutionOutlined ,
    NotificationOutlined 
    , FilePdfOutlined  
    ,FileSearchOutlined
    ,BulbOutlined
    ,ExportOutlined
    ,UserSwitchOutlined
    ,DeploymentUnitOutlined
} from '@ant-design/icons';

import { Button, Divider, Space, Tooltip } from 'antd';

const LandingPage=()=> {
    

    var TooltipColor=""
    return(
        <Container>
            <Row className='justify-center'>
                <Col lg={8} md={7} sm={6} xs={12}>
                    <div className="profile_container">
                        <Row className='justify-center'>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div onClick={()=>window.location.href="manager/diagnostic"} className="profile_item">
                                    <div>
                                        <FileAddOutlined className='text-4xl py-3' />
                                    </div>
                                    new Diagnostis
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div onClick={()=>window.location.href="manager/patients"} className="profile_item">
                                    <div>
                                        <UsergroupAddOutlined className='text-4xl py-3' />
                                    </div>
                                    All patients
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div className="profile_item">
                                    <div>
                                        <SolutionOutlined className='text-4xl py-3' />
                                    </div>
                                    your clinic fees
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div className="profile_item">
                                    <div>
                                    <NotificationOutlined  className='text-4xl py-3' />
                                    </div>
                                    
                                    Live center
                                </div>
                                
                            </Col>
                        </Row>
                        <Row className='justify-center pt-3'>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div className="profile_item2">
                                        <FilePdfOutlined className='px-1 text-4xl' />
                                        <span>
                                            PDF Setting
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div className="profile_item2">
                                    
                                        <FileSearchOutlined className='px-1 text-4xl' />
                                        <span>
                                            docs
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div className="profile_item2">
                                        <BulbOutlined className='px-1 text-4xl' />
                                        <span>
                                            smart plan
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div onClick={()=>window.location.href="manager/Doctors"} className="profile_item2">
                                        <UserSwitchOutlined className='px-1 text-4xl' />
                                        <span>
                                            users
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div className="profile_item2">
                                        <DeploymentUnitOutlined className='px-1 text-4xl' />
                                        <span>
                                            integrations
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div className="profile_item2">
                                        <ExportOutlined className='px-1 text-4xl' />
                                        <span>
                                            supscription
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={5} sm={6} xs={12}>
                    <div className='profile_container'>
                        data
                    </div>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage
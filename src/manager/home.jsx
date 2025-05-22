
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { 
    FileAddOutlined,
    UsergroupAddOutlined,
    SolutionOutlined ,
    PhoneOutlined 
    ,ReconciliationOutlined
    ,LogoutOutlined
    , FilePdfOutlined  
    ,FileSearchOutlined
    ,BulbOutlined
    ,ExportOutlined
    ,UserSwitchOutlined
    ,DeploymentUnitOutlined
} from '@ant-design/icons';

import ResetPassword from './components/resetPassword'
// import { Button, Modal } from 'antd';
import { Tooltip , Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";

const LandingPage=()=> {
    const { t } = useTranslation();
    const { logout } = modeActions;
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
      dispatch(logout());
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    
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
                                    {t("new_Diagnostis")}
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div onClick={()=>window.location.href="manager/patients"} className="profile_item">
                                    <div>
                                        <UsergroupAddOutlined className='text-4xl py-3' />
                                    </div>
                                    {t("All_patients")}
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div onClick={()=>window.location.href="manager/clinics"} className="profile_item">
                                    <div>
                                        <SolutionOutlined className='text-4xl py-3' />
                                    </div>
                                    {t("your_clinic")}
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={12} >
                                <div onClick={()=>window.location.href="manager/Doctors"} className="profile_item">
                                    <div>
                                    <UserSwitchOutlined className='text-4xl py-3' />
                                    </div>
                                    
                                    {t("Doctors")}
                                </div>
                                
                            </Col>
                        </Row>
                        <Row className='justify-center pt-3'>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div onClick={()=>window.location.href="manager/pdfSetting"} className="profile_item2">
                                        <FilePdfOutlined className='px-1 text-4xl' />
                                        <span>
                                            {t("PDF_Setting")}
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                            <Col lg={4} sm={6} xs={12} >
                                <Tooltip placement="top" title="test text as description" >
                                    <div className="profile_item2">
                                    
                                        <FileSearchOutlined className='px-1 text-4xl' />
                                        <span>
                                            {t("Diagnostis")}
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
                                    <div onClick={()=>window.location.href="manager/visites/0"} className="profile_item2">
                                        <ReconciliationOutlined className='px-1 text-4xl' />
                                        <span>
                                           {t("visites")}
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
                                            {t("supscription")}
                                        </span>
                                        
                                    </div>
                                </Tooltip>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={5} sm={6} xs={12}>
                    <div className='profile_container'>
                        <ResetPassword />
                        <div onClick={()=>window.location.href="manager/support"} className="profile_item3">
                            <span>
                                {t("suppurt")}
                            </span>
                            <PhoneOutlined className='px-1 text-3xl' />
                        </div>
                        <div onClick={showModal} className="profile_item3">
                            <span>
                                {t("log_out")}
                            </span>
                            <LogoutOutlined className='px-1 text-3xl' />

                        </div>
                        
                    </div>
                    
                </Col>
            </Row>
            <Modal
                title={t("log_out")}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {t("loguot_message")}
            </Modal>
        </Container>
    )
}

export default LandingPage
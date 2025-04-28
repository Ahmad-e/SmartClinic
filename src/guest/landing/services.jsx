import LandingSvg from '../../svgs/landing'

import AppButton from '../../component/button'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StockOutlined, UsergroupAddOutlined, ReconciliationOutlined , ContactsOutlined,PieChartOutlined,MessageOutlined } from '@ant-design/icons';
const LandingPage=()=> {
    const { t } = useTranslation();
    return(
        <>
            <div style={{ textAlign:"start" }} className='App-Background  p-5'>
                <Container className='App-Background text-slate-300 ' >
                    <Row className='justify-center'>
                        <Col lg={12} sm={12} >
                            <div className='text-4xl font-bold py-2'>
                            { t("our_services")}
                            </div>
                            <div className='py-2'>
                            { t("our_services_text")}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container style={{ textAlign:"start" }}>
                <Row className='justify-center my-5' >
                    <Col md={4} sm={11} xs={12} >
                        <div className='service'>
                            <div className='service-icon-content' style={{ textAlign:"end" }}>
                                <div  className="service-icon-box">
                                    <UsergroupAddOutlined style={{ fontSize:"30px" , margin:"5px" }} />
                                </div>
                            </div>

                            <div className='text-2xl font-bold py-2 main_color' >
                            { t("Doctor_Management")}
                            </div>
                            <div className='py-2'>
                            { t("Doctor_Management_text")}
                            </div>

                        </div>
                        
                    </Col>
                    <Col md={4} sm={11} xs={12} >
                        <div className='service'>
                            <div className='service-icon-content' style={{ textAlign:"end" }}>
                                <div  className="service-icon-box">
                                    <ReconciliationOutlined style={{ fontSize:"30px" , margin:"5px" }} />
                                </div>
                            </div>

                            <div className='text-2xl font-bold py-2 main_color' >
                            { t("Diagnostics_Management")}
                            </div>
                            <div className='py-2'>
                            { t("Diagnostics_Management_text")}
                            </div>

                        </div>
                        
                    </Col>
                    <Col md={4} sm={11} xs={12} >
                        <div className='service'>
                            <div className='service-icon-content' style={{ textAlign:"end" }}>
                                <div  className="service-icon-box">
                                    <ContactsOutlined  style={{ fontSize:"30px" , margin:"5px" }} />
                                </div>
                            </div>

                            <div className='text-2xl font-bold py-2 main_color' >
                            { t("Patient_management")}
                            </div>
                            <div className='py-2'>
                            { t("Patient_management_text")}
                            </div>

                        </div>
                        
                    </Col>
                    <Col md={4} sm={11} xs={12} >
                        <div className='service'>
                            <div className='service-icon-content' style={{ textAlign:"end" }}>
                                <div  className="service-icon-box">
                                    <MessageOutlined style={{ fontSize:"30px" , margin:"5px" }} />
                                </div>
                            </div>

                            <div className='text-2xl font-bold py-2 main_color' >
                            { t("Continuous_technical_support")}
                            </div>
                            <div className='py-2'>
                            { t("Continuous_technical_support_text")}
                            </div>

                        </div>
                        
                    </Col>
                    <Col md={4} sm={11} xs={12} >
                        <div className='service'>
                            <div className='service-icon-content' style={{ textAlign:"end" }}>
                                <div  className="service-icon-box">
                                    <PieChartOutlined style={{ fontSize:"30px" , margin:"5px" }} />
                                </div>
                            </div>

                            <div className='text-2xl font-bold py-2 main_color' >
                            { t("Reports_Analyses")}
                            </div>
                            <div className='py-2'>
                            { t("Reports_Analyses_text")}
                            </div>

                        </div>
                        
                    </Col>
                    <Col md={4} sm={11} xs={12} >
                        <div className='service'>
                            <div className='service-icon-content' style={{ textAlign:"end" }}>
                                <div  className="service-icon-box">
                                    <StockOutlined  style={{ fontSize:"30px" , margin:"5px" }} />
                                </div>
                            </div>

                            <div className='text-2xl font-bold py-2 main_color' >
                            { t("Financial_management")}
                            </div>
                            <div className='py-2'>
                            { t("Financial_management_text")}
                            </div>

                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingPage
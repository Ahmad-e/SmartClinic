import LandingSvg from '../../svgs/landing'

import AppButton from '../../component/button'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage=()=> {
    const { t } = useTranslation();
    return(
        <Container>
            <Row>
                <Col className='landing-text-top' lg={4} md={6} sm={10} >
                    <div>
                        <p className='text-5xl main_color font-bold p-1' >
                        { t("Smart_clinic")}
                        </p>
                        <p className='text-2xl p-1' >
                        { t("text_landing")}
                        </p>
                        <p className='p-1'>
                            <AppButton href="/register" text={ t("register_now")} ></AppButton>
                            
                        </p>
                    </div>
                </Col >
                <Col className="flex justify-center svg-home" lg={8} md={6} sm={10} >
                    <LandingSvg/>
                </Col >
            </Row>

            
        </Container>
    )
}

export default LandingPage
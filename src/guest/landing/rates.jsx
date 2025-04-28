import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage=()=> {
    const { t } = useTranslation();
    return(
        <Container>
            <Row className='justify-center py-5' style={{ textAlign:"start" }} >
                <Col className=' p-4' md={4} sm={12} >
                    <div className=' flex items-center '>
                        <span className='text-5xl main_color font-bold m-1'>+20</span>
                        <span className='text-xl font-bold'>{ t("clinics")}</span>
                    </div>
                   
                    <div className='text-md' >
                        { t("clinics_text")}
                    </div>
                  
                </Col>

                <Col className=' p-4 border-betwen' md={4} sm={12} >
                    <div className=' flex items-center '>
                        <span className='text-5xl main_color font-bold m-1'>+83</span>
                        <span className='text-xl font-bold'>{ t("doctors")}</span>
                    </div>
                   
                    <div className='text-md' >
                        { t("doctors_text")}
                    </div>
                  
                </Col>

                <Col className=' p-4' md={4} sm={12} >
                    <div className=' flex items-center '>
                        <span className='text-5xl main_color font-bold m-1'>+241</span>
                        <span className='text-xl font-bold'>{ t("diagnosis")}</span>
                    </div>
                   
                    <div className='text-md ' >
                        { t("diagnosis_text")}
                    </div>
                  
                </Col>
            </Row>
            
        </Container>
    )
}

export default LandingPage
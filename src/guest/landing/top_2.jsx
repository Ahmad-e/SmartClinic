import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LandingPage=()=> {
    return(
        <div style={{ textAlign:"start" }} className='App-Background  p-5'>
            <Container className='App-Background text-slate-300 ' >
                <Row className='justify-center'>
                    <Col lg={12} sm={12} >
                        <div className='text-4xl font-bold py-2'>
                        خدماتنا
                        </div>
                        <div className='py-2'>
                        نقدم في [اسم الموقع] مجموعة شاملة من الخدمات المخصصة لإدارة عيادات أطباء الأسنان بكفاءة واحترافية. تهدف خدماتنا إلى تسهيل العمليات اليومية وتحسين تجربة المرضى، مما يسهم في نجاح عيادتك. إليك نظرة على أبرز الخدمات التي نقدمها:
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default LandingPage
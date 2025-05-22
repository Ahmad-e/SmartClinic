import { message, Input   } from 'antd';

import AppButton from '../component/button'
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import * as React from 'react';

import Loading from '../component/loading'
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App=()=> {
    const { TextArea } = Input;
    const token = useSelector(state => state.token);
    const url = useSelector((state) => state.apiURL);

    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(false);
    const [text, setText] = React.useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const info = () => {
        messageApi.info(t("suppurt_message"));
      };


    const Send_data=()=>{
        setLoading(true)
        if(text.length>0)
            try {
            
            const formData = new FormData();
            
            formData.append('feedback', text);
            
            
            const response = axios.post( url + 'api/feedback/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token,
                    'Accept': "application/json"
                }
                }).then((response) => {
                    info();
                    console.log(response.data)
                    setText("")
                    setLoading(false)
                
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
    }
    return(
        <Container  >
            {contextHolder}
            <Loading loading={loading} />
            <Row className='justify-center pt-3'>
                <Col lg={6} md={8} sm={11} className='p-3' >
                    {t("support_text")}
                </Col>
                
                <Col  lg={7} md={8} sm={11} className='p-3'>
                    <TextArea value={text} onChange={(e)=>setText(e.target.value)} rows={4}  />
                </Col>
                <Col lg={12} sm={12}>
                    <AppButton text={t("send_data")} onClick={()=>Send_data()} />
                </Col>
            </Row>
        </Container>

    )
}

export default App
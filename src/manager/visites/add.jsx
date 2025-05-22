import {  useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import { DatePicker, Radio  } from 'antd';
import { Collapse, Alert, Input } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppButton from '../../component/button'


const App = (props) => {
  const mode = useSelector((state) => state.mode);

  const { t } = useTranslation();

  const [name, setName] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [errName, setErrName] = React.useState(false);
  const [errPassword, setErrPassword] = React.useState(false);
  const [errEmail, setErrEmail] = React.useState(false);
  const [errServer, setErrSever] = React.useState(false)

  
  const changeName=(e)=>{
      setName(e.target.value);
      if(e.target.value.length<3)
          setErrName(true)
      else
          setErrName(false)
  }


  const Send_data=()=>{
    {
      
            
    }
        

}



  return(
    <div className='py-4'>
      
      <Collapse
        items={[{ key: '1', label: t('new_visite'), children: 
          <Container>
            <Row className='justify-center' > 
            
                <Col  sm={6} xs={12} className='auth-item'> 
                
                    <Input value={name} onChange={changeName} status={errName ? ("error"):""} className={mode}  size="large" placeholder={ t("add_note") } variant="underlined" />
                    <label hidden={!errName} className='auth-lable text-red-700 font-bold text-sm'> { t("name_error") } </label>
                </Col>
                <Col sm={6} xs={12} className='auth-item p-4'>
                    <AppButton onClick={()=>Send_data()} text={ t("save_data") }  ></AppButton>
                </Col>
            </Row>
          </Container> 
          }
        ]
      }
      />
    </div>
  )
};
export default App;
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

  const options = [
    { label: t("Male"), value: 'Male' },
    { label: t("Female"), value: 'Female' }
  ];

  const [firstName, setFirstName] = React.useState('');
  const [errFirstName, setErrFirstName] = React.useState(false);
  const changeFirstName=(e)=>{
    setFirstName(e.target.value);
    if(e.target.value.length<1)
      setErrFirstName(true)
    else
    setErrFirstName(false)

  }

  const [lastName, setLastName] = React.useState('');
  const [errLastName, setLastErrName] = React.useState(false);
  const changeLastName=(e)=>{
    setLastName(e.target.value);
    if(e.target.value.length<1)
      setLastErrName(true)
    else
    setLastErrName(false)
  }

  const [address, setAddress] = React.useState('');
  const [errAddress, setErrAddress] = React.useState(false);
  const changeAddress=(e)=>{
    setAddress(e.target.value);
    if(e.target.value.length<1)
      setErrAddress(true)
    else
    setErrAddress(false)
  }

  const [gander, setGander] = React.useState('');


  const [email, setEmail] = React.useState('');
  const [errEmail, setErrEmail] = React.useState(false);
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const changeEmail=(e)=>{
      setEmail(e.target.value);
      if(!re.test(e.target.value))
          setErrEmail(true)
      else
          setErrEmail(false)
  }

  
  const [phone_no, setPhone_no] = React.useState('');
  const [errPhone_no, setErrPhone_no] = React.useState(false);
 
  const changePhone_no=(e)=>{
      setPhone_no(e.target.value);
      if(e.target.value.length<5)
          setErrPhone_no(true)
      else
      setErrPhone_no(false)
  }

  const [date, setDate] = React.useState('');
  const [errDate, setErrDate] = React.useState(false);
  const onChangeDate = (date, dateString) => {
    setDate(dateString);
    console.log( dateString);
  };


  
  const Send_data=()=>{
    if( !errFirstName && !errEmail && !errLastName && !errAddress && !errPhone_no && !errDate ){
        if(firstName==='' || email==="" || lastName==="" || phone_no==="" || address==="" ||  date===""   ){
            if(firstName.length<3)
                setErrFirstName(true)
            else
                setErrFirstName(false)

            if(lastName.length<3)
                setLastErrName(true)
            else
            setLastErrName(false)

            if(address.length<1)
              setErrAddress(true)
            else
            setErrAddress(false)
  

            
            if(!re.test(email))
                setErrEmail(true)
            else
                setErrEmail(false)

            if(phone_no.length<5)
                setErrPhone_no(true)
            else
            setErrPhone_no(false)

            return;
        }    
        props.onAdd({
          firstname:firstName,
          lastname:lastName,
          gender:gander,
          phonenumber:phone_no,
          address:address,
          birthdate:date,
          email:email
      })
    }
}


  return(
    <div className='py-4'>
      
      <Collapse
        items={[{ key: '1', label: t('add_patients'), children: 
          <Container>
            <Row className='justify-center' > 
              <Col lg={3} md={4} sm={6} xs={12} className='py-2' >
                <Input value={firstName} onChange={changeFirstName} status={errFirstName ? ("error"):""} className={mode}  size="large" placeholder={ t("First_name") } variant="underlined" />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12} className='py-2' >
                <Input value={lastName} onChange={changeLastName} status={errLastName ? ("error"):""} className={mode}  size="large" placeholder={ t("Last_name") } variant="underlined" />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}  className='py-2'>
                <Input type='email' value={email} onChange={changeEmail} status={errEmail ? ("error"):""} className={mode} size="large" placeholder={ t("email") } variant="underlined" />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}  className='py-2'>
                <Input value={address} onChange={changeAddress} status={errAddress ? ("error"):""} className={mode}  size="large" placeholder={ t("Address") } variant="underlined" />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12} className='py-2'>
                <DatePicker  style={{ width:"100%" }} onChange={onChangeDate}  variant="underlined" placeholder={ t("Birthdate") }  />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12} className='py-2'>
                <Radio.Group
                  block
                  options={options}
                  defaultValue="Male"
                  onChange={(e)=>setGander(e.target.value)}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Col>
              <Col lg={3} md={4} sm={6} xs={12} >
                <Input value={phone_no} onChange={changePhone_no} status={errPhone_no ? ("error"):""} className={mode}  size="large" placeholder={ t("phone_no") } variant="underlined" type='number' />
              </Col>
              <Col className='py-2' lg={12} sm={12}>
                <AppButton text={t("save data")} onClick={()=>Send_data()} />
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
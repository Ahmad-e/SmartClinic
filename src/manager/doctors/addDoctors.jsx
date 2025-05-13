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

  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const changeEmail=(e)=>{
      setEmail(e.target.value);
      if(!re.test(e.target.value))
          setErrEmail(true)
      else
          setErrEmail(false)
  }

  const changePassword=(e)=>{
      setPassword(e.target.value);
      if(e.target.value.length<8)
          setErrPassword(true)
      else
          setErrPassword(false)
  }

  const Send_data=()=>{
    if( !errName && !errEmail && !errPassword ){
        if(name==='' || email==="" || password===""  ){
            if(name<3)
                setErrName(true)
            else
                setErrName(false)

            
            if(!re.test(email))
                setErrEmail(true)
            else
                setErrEmail(false)

            if(password<8)
                setErrPassword(true)
            else
                setErrPassword(false)

            return;
        }
        console.log("ok")
        // setLoading(true)
        // try {
        //     const response = axios.post(url+'auth/register/', {
        //         fullname:name,
        //         email:email,
        //         password:password,
        //         password2:password,
        //         clinc:"c_n",
        //         role:"administrator"
        //     },
        //     {
        //         headers:{
        //             'Content-Type': 'application/json',
        //             'Accept':"application/json"
        //         }
        //     }).then((response) => {
        //         setLoading(false)
        //         if(response.data.code===200){     
        //             console.log(response.data);
                    
        //         }
        //         else{
        //           console.log("response.data");
        //           setErrSever(response.data.message)
                    
        //         }
    
        //     }).catch((error) => {
        //         console.log(error)
        //         setErrSever(true)
        //         setLoading(false)
        //     });
            
        // } catch (e) {
        //       throw e;
        // }

            
    }
        

}



  return(
    <div className='py-4'>
      
      <Collapse
        items={[{ key: '1', label: t('Add_user'), children: 
          <Container>
            <Row className='justify-center' > 
            
                <Col lg={3} md={4} sm={6} xs={12} className='auth-item'> 
                
                    <Input value={name} onChange={changeName} status={errName ? ("error"):""} className={mode}  size="large" placeholder={ t("name") } variant="underlined" />
                    <label hidden={!errName} className='auth-lable text-red-700 font-bold text-sm'> { t("name_error") } </label>
                </Col>

                <Col lg={3} md={4} sm={6} xs={12} className='auth-item'> 
                
                    <Input type='email' value={email} onChange={changeEmail} status={errEmail ? ("error"):""} className={mode} size="large" placeholder={ t("email") } variant="underlined" />
                    <label hidden={!errEmail} className='auth-lable text-red-700 font-bold text-sm'> { t("email_error") } </label>
                </Col>

                <Col lg={3} md={4} sm={6} xs={12} className='auth-item' >
                  
                    <Input.Password value={password} onChange={changePassword} status={errPassword ? ("error"):""} className={mode} type='password' size="large" placeholder={ t("password") } variant="underlined" />
                    <label hidden={!errPassword} className='auth-lable text-red-700 font-bold text-sm'> { t("password_error") } </label>
                </Col>

                <Col lg={12} xs={12} className={'auth-item p-4 ' + (!errServer ? "hidden" : '')}>
                <Alert  message={t("s_email_error")} type="error" showIcon closable />
                </Col>
                <Col lg={12} xs={12} className='auth-item p-4'>
                    <AppButton onClick={()=>Send_data()} text={ t("register") }  ></AppButton>
                </Col>
                

              {/* <Col lg={3} md={4} sm={6} xs={12} className='py-2' >
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
              </Col> */}
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
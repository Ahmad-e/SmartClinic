import { Radio, Input,Button } from 'antd';
import AppButton from '../../component/button'
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";
import { useTranslation } from 'react-i18next';
import * as React from 'react';
// import { Button, Divider, Flex, Radio } from 'antd';

const Register=()=> {
    const {setLanguage,toggleMode,logout} = modeActions;
    const mode = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [type, setType] = React.useState('');

    const [errName, setErrName] = React.useState(false);
    const [errPassword, setErrPassword] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errServer, setErrSever] = React.useState('')

    
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


                
        }
            

    }


    return(
        <div className="flex justify-center">
            <div className="">
                <div className="text-3xl p-3 main_color">
                { t("create_Account") }
                </div>
                <div className='auth-item'> 
                    <label className='auth-lable'> { t("name_text") } </label>
                    <Input value={name} onChange={changeName} status={errName ? ("error"):""} className={mode}  size="large" placeholder={ t("name") } variant="underlined" />
                    <label hidden={!errName} className='auth-lable text-red-700 font-bold text-sm'> { t("name_error") } </label>
                </div>

                <div className='auth-item'> 
                    <label className='auth-lable'> { t("email_text") } </label>
                    <Input type='email' value={email} onChange={changeEmail} status={errEmail ? ("error"):""} className={mode} size="large" placeholder={ t("email") } variant="underlined" />
                    <label hidden={!errEmail} className='auth-lable text-red-700 font-bold text-sm'> { t("email_error") } </label>
                </div>

                <div className='auth-item' >
                    <label className='auth-lable'> { t("password_text") } </label>
                    <Input.Password value={password} onChange={changePassword} status={errPassword ? ("error"):""} className={mode} type='password' size="large" placeholder={ t("password") } variant="underlined" />
                    <label hidden={!errPassword} className='auth-lable text-red-700 font-bold text-sm'> { t("password_error") } </label>
                </div>

                <div >
                    <label className='auth-lable block px-3 mt-3'> { t("caaount_type") } </label>
                    <Radio.Group className='mt-1' buttonStyle="solid" value={type} onChange={e => setType(e.target.value)}>
                        <Radio.Button  variant="solid" value="large">Admin</Radio.Button>
                        <Radio.Button variant="solid" value="default">Manager</Radio.Button>
                        <Radio.Button variant="solid" value="small">doctor</Radio.Button>
                    </Radio.Group>
                </div>


                <div className='auth-item p-4'>
                    <AppButton onClick={()=>Send_data()} text={ t("create account") }  ></AppButton>
                </div>
                



            </div>
        </div>

    )
}

export default Register
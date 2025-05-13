import { Alert, Input } from 'antd';
import AppButton from '../component/button'
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import Loading from '../component/loading'
import axios from "axios";

const Register=()=> {
    const {setUserId,setAccount,setToken} = modeActions;
    const mode = useSelector((state) => state.mode);
    const url = useSelector((state) => state.apiURL);

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(false);


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
            setLoading(true)
            try {
                const response = axios.post(url+'auth/register/', {
                    fullname:name,
                    email:email,
                    password:password,
                    password2:password,
                    clinc:"c_n",
                    role:"administrator"
                },
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept':"application/json"
                    }
                }).then((response) => {
                    setLoading(false)
                    if(response.data.code===200){     
                        console.log(response.data);
                        dispatch(setAccount(response.data.data.role))
                        dispatch(setToken(response.data.data.token.token))
                        dispatch(setUserId(response.data.data.uid))
                    }
                    else{
                    console.log("response.data");
                    setErrSever(response.data.message)
                        
                    }
        
                }).catch((error) => {
                    console.log(error)
                    setErrSever(true)
                    setLoading(false)
                });
                
            } catch (e) {
                  throw e;
            }

                
        }
            

    }


    return(
        <div className="flex justify-center">
            <Loading loading={loading} />
            <div className="auth_c ">
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

                <div className={'auth-item p-4 ' + (!errServer ? "hidden" : '')}>
                <Alert  message={t("s_email_error")} type="error" showIcon closable />
                </div>
                <div className='auth-item p-4'>
                    <AppButton onClick={()=>Send_data()} text={ t("register") }  ></AppButton>
                </div>
                
                
                <div className='auth-item p-4 text-lg'>
                    { t("have_acc") } <a href='login'> { t("login") } </a>
                </div>



            </div>
        </div>

    )
}

export default Register
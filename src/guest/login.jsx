import { Flex, Input } from 'antd';
import AppButton from '../component/button'
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../store";
import { useTranslation } from 'react-i18next';
import * as React from 'react';


const Login=()=> {
    const {setLanguage,toggleMode,logout} = modeActions;
    const mode = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    const { t } = useTranslation();


    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');


    const [errPassword, setErrPassword] = React.useState(false);
    const [errEmail, setErrEmail] = React.useState(false);
    const [errServer, setErrSever] = React.useState('')

    


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
        if(!errEmail && !errPassword ){
            if(email==="" || password===""  ){
                
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
            <div className="auth_c ">
                <div className="text-2xl p-4 main_color">
                { t("Log_in_account") }
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


                <div className='auth-item p-4'>
                    <AppButton onClick={()=>Send_data()} text={ t("register") }  ></AppButton>
                </div>




            </div>
        </div>

    )
}

export default Login
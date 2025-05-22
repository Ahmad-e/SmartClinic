import React, { useState } from 'react';
import { Input, Modal ,Alert} from 'antd';
import { useTranslation } from 'react-i18next';
import { LockOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Loading from '../../component/loading'
import axios from "axios";

const App = () => {
    const mode = useSelector((state) => state.mode);
    const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [errServer, setErrSever] = React.useState(false)

  const [password, setPassword] = React.useState('');
  const [errPassword, setErrPassword] = React.useState(false);
  const changePassword=(e)=>{
    setPassword(e.target.value);
    if(e.target.value.length<8)
        setErrPassword(true)
    else
        setErrPassword(false)
}

    const [resetpassword, setResetPassword] = React.useState('');
    const [errResetPassword, setErrResetPassword] = React.useState(false);
    const changeResetPassword=(e)=>{
    setResetPassword(e.target.value);
    if(e.target.value.length<8)
        setErrResetPassword(true)
    else
        setErrResetPassword(false)
    }

    const Send_data=()=>{
      if(password!==resetpassword){
        setErrSever(true)
        return
      }
      console.log(password)
    }

  return (
    <>
        <div onClick={()=>setIsModalOpen(true)} className="profile_item3">
            

            <span>
                {t("change_password")}
            </span>
            <LockOutlined className='px-1 text-3xl' />
            
        </div>
      <Modal
        title={t("change_password")}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={Send_data}
        onCancel={handleCancel}
      >
        <div className='dialog_center'>
            <div style={{ maxWidth:"300px" }} className='py-2'>
                <Input.Password  value={password} onChange={changePassword} status={errPassword ? ("error"):""} className={mode} type='password' size="large" placeholder={ t("password") } variant="underlined" />
                <label hidden={!errPassword} className='auth-lable text-red-700 font-bold text-sm'> { t("new_password") } </label>
            </div>
            <div style={{ maxWidth:"300px" }} className='py-3'>
                <Input.Password  value={resetpassword} onChange={changeResetPassword} status={errResetPassword ? ("error"):""} className={mode} type='password' size="large" placeholder={ t("password") } variant="underlined" />
                <label hidden={!errResetPassword} className='auth-lable text-red-700 font-bold text-sm'> { t("re_new_password") } </label>
            </div>
            
            <div className={'auth-item p-4 ' + (!errServer ? "hidden" : '')}>
                <Alert  message={t("err_re_new_password")} type="error" showIcon closable />
                </div>
        </div>

      </Modal>
    </>
  );
};
export default App;
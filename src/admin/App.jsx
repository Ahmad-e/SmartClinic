import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AdminNav from './components/adminNav'

const Home=()=>{

    // const language = useSelector((state) => state.language);
    // const acc = useSelector(state => state.account);



    return(
        <>
        <div className='flex'>
            <AdminNav/>
            <div className='w-full' >
                <Outlet />
            </div>
            
        </div>
        </>
    )
}
export default Home
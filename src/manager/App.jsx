import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Nav from './components/managerNav'

const Home=()=>{

    // const language = useSelector((state) => state.language);
    // const acc = useSelector(state => state.account);
    return(
        <>
        <div className='flex'>
            <Nav />
            
            <div className=' w-full' >
                <Outlet />
            </div>
            
        </div>
        </>
    )
}
export default Home
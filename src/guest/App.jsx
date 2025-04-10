import {Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';


const Home=()=>{

    // const language = useSelector((state) => state.language);
    // const acc = useSelector(state => state.account);



    return(
        <>
        <div className=''>
            
            <div >
                <Outlet />
            </div>
            
        </div>
        </>
    )
}
export default Home
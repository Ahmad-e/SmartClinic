import * as React from 'react';
import { useSelector } from 'react-redux';
const Svg=(props)=> {
    const mode = useSelector((state) => state.mode);
    return(
        <>
             <hr  style={props.style} className='line-hr' /> 
        </>
    )
}

export default Svg
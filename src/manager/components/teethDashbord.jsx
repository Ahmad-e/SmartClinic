import * as React from 'react';

import Col from 'react-bootstrap/Col';


import Teeth1 from '../../svgs/teeths/teeth1';
import Teeth2 from '../../svgs/teeths/teeth2';
import Teeth3 from '../../svgs/teeths/teeth3';
import Teeth4 from '../../svgs/teeths/teeth4';
import Teeth5 from '../../svgs/teeths/teeth5';
import TeethTop6 from '../../svgs/teeths/top6';
import TeethTop7 from '../../svgs/teeths/top7';
import TeethTop8 from '../../svgs/teeths/top8';

import TeethDown6 from '../../svgs/teeths/down6';
import TeethDown7 from '../../svgs/teeths/down7';
import TeethDown8 from '../../svgs/teeths/down8';

import Line1 from '../../svgs/teeths/line1'
import Line2 from '../../svgs/teeths/line2'
import Line2Auto from '../../svgs/teeths/line2auto'
import Background from '../../svgs/teeths/background'

import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";
import { BorderRight } from '@mui/icons-material';
import { Tooltip , Modal } from 'antd';
const Teeth=(props)=> {
    var test = [1,2,3,4,5,6,7,8]
    const lang = useSelector((state) => state.language);
    // const lin0Height = useSelector((state) => state.lin0Height);
    const sinus_1 = useSelector((state) => state.sinus_1);
    const sinus_2 = useSelector((state) => state.sinus_2);
    // const lin1Height = useSelector((state) => state.lin1Height);
    // const lin2Height = useSelector((state) => state.lin2Height);
    const teethData = useSelector((state) => state.teethData);
    // const selectedTeeth = useSelector((state) => state.selectedTeeth);
    const {setSelectedTeeth,setLine1Height,setLine2Height} = modeActions;
    const dispatch = useDispatch();


    return(
            <Col className='flex justify-start' style={{ overflow:"scroll" , maxHeight:'540px' }} lg={9} md={7} sm={12} > 
                <div style={{ width:"925px"  }} >
                        <div  style={{ width:"925px"  }}>
                            <div   style={{  marginBottom:"-30px"   }} className='pb-12' >
                                <div className='flex justify-between' >
                                    <div  style={{ padding: "30px 60px", marginBottom:"-40px" ,filter: "drop-shadow(0px 0px 2px #000)" , position: "relative"  , top:(40+( -1 * parseInt(sinus_1) )) }}>
                                        <Line2  />
                                    </div>
                                    <div style={{ padding: "30px 60px",  marginBottom:"-40px" ,filter: "drop-shadow(0px 0px 2px #000)" , position: "relative"  , top:(40+( -1 * parseInt(sinus_2) )) }}>
                                        <Line2 reverse={true} />
                                    </div>
                                </div>
                            </div>
                            <div   style={{  marginBottom:"-30px"   }} className='pb-12' >
                                <div style={{  marginTop:"-195px"   }} className='flex justify-between'  >
                                    <div  style={{ padding: "30px 60px", marginBottom:"-40px" ,filter: "drop-shadow(0px 0px 2px #000)" , position: "relative"  , top:40 }}>
                                        <Line2Auto  />
                                    </div>
                                    <div style={{ padding: "30px 60px",  marginBottom:"-40px" ,filter: "drop-shadow(0px 0px 2px #000)" , position: "relative"  , top:40 }}>
                                        <Line2Auto reverse={true} />
                                    </div>
                                </div>
                            </div>
                            <div  style={{  height:"0px" }}>
                                    <Line1 style={ {
                                        position: "relative",
                                        top: 80
                                    } } />
                                
                            </div>

                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(8))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}   placement="top" title={
                                    teethData[8].diagnostics.length===0 ? (
                                        null 
                                    ):(
                                        teethData[8].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                    )
                                }
                                >
                                    <TeethDown8 rotate={ true } error={teethData[8].diagnostics.length!==0} />
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[8].height-37,
                                        } }
                                        className={'line-hr '+( teethData[8].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <div className='text-sm py-2'>
                                        {18}
                                    </div>
                                </Tooltip>
                            </button>
                            <button  onClick={()=>dispatch(setSelectedTeeth(7))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[7].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[7].diagnostics.map((arr)=>( <p>{arr.ids_arr + '\t'} </p>  )) 
                                        )
                                    }
                                    >
                                    <TeethDown7  rotate={ true } error={teethData[7].diagnostics.length!==0}  />
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[7].height-37,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[7].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <div className='text-sm py-2'>
                                        {17}
                                    </div>
                                </Tooltip>
                            </button>
                            <button  onClick={()=>dispatch(setSelectedTeeth(6))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[6].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[6].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >     
                                    <TeethDown6  rotate={ true } error={teethData[6].diagnostics.length!==0} />
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[6].height-37,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[6].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <div className='text-sm py-2'>
                                        {16}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(5))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[5].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[5].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }>         
                                    <Teeth5 rotate={ true } error={teethData[5].diagnostics.length!==0}/>
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[5].height-37,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[5].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <div className='text-sm py-2'>
                                        {15}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px 1px" }} onClick={()=>dispatch(setSelectedTeeth(4))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[4].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[4].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }>        
                                    <Teeth4   rotate={ true } error={teethData[4].diagnostics.length!==0}/>
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[4].height-37,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[4].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <div className='text-sm py-2'>
                                        {14}
                                    </div>
                                    </Tooltip> 
                            </button>  
                            <button style={{ translate:"0px 1px" }}  onClick={()=>dispatch(setSelectedTeeth(3))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[3].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[3].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >      
                                    <Teeth3  rotate={ true } error={teethData[3].diagnostics.length!==0} />
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[3].height-37,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[3].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <div className='text-sm py-2'>
                                        {13}
                                    </div>
                                </Tooltip> 
                            </button>  
                            
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(2))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[2].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[2].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >    
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[2].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[2].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <Teeth1 error={teethData[2].diagnostics.length!==0} />
                                    <div   className='text-sm py-2'>
                                        {12}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(1))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[1].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[1].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >      
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[1].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[1].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <Teeth2  rotate={ true } error={teethData[1].diagnostics.length!==0} />
                                    <div className='text-sm py-2'>
                                        {11}
                                    </div>
                                </Tooltip> 
                            </button>
                            
                            {/* ////////////// */}
                            <span className={ lang==="Ar" ?  ' center-teeth-border-AR' : "center-teeth-border"}>
                                <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(9))} className='btn_svg w-full'>
                                    <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[9].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[9].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >
                                        <hr style={ {
                                                position: "relative",
                                                top: teethData[9].height+66,
                                                BackgroundColor:"#111"
                                            } }
                                            className={'line-hr '+( teethData[9].height !==0 ? ("bg-red-700"):("") )}
                                            />            
                                        <Teeth2 rotate={ true } reverse={true} error={teethData[9].diagnostics.length!==0}/>
                                        <div className='text-sm py-2'>
                                            {21}
                                        </div>
                                        </Tooltip> 
                                </button>
                            </span>

                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(10))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[10].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[10].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[10].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[10].height !==0 ? ("bg-red-700"):("") )}
                                        />     
                                    <Teeth1  reverse={true} error={teethData[10].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {22}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(11))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[11].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[11].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >     
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[11].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[11].height !==0 ? ("bg-red-700"):("") )}
                                        />      
                                    <Teeth3  rotate={ true }  reverse={true} error={teethData[11].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {23}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(12))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[12].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[12].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >      
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[12].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[12].height !==0 ? ("bg-red-700"):("") )}
                                        />   
                                    <Teeth4  rotate={ true }  reverse={true} error={teethData[12].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {24}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(13))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[13].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[13].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[13].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[13].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <Teeth5 rotate={ true }  reverse={true} error={teethData[13].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {25}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px -2px" }}  onClick={()=>dispatch(setSelectedTeeth(14))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[14].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[14].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >
                                <hr style={ {
                                            position: "relative",
                                            top: teethData[14].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[14].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <TeethDown6 rotate={ true }  reverse={true} error={teethData[14].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {26}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(15))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[15].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[15].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >     
                                <hr style={ {
                                            position: "relative",
                                            top: teethData[15].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[15].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <TeethDown7 rotate={ true }  reverse={true} error={teethData[15].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {27}
                                    </div>
                                </Tooltip> 
                            </button>
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(16))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="top" title={
                                        teethData[16].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[16].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    >     
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[16].height+66,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[16].height !==0 ? ("bg-red-700"):("") )}
                                        />
                                    <TeethDown8 rotate={ true }  reverse={true} error={teethData[16].diagnostics.length!==0}/>
                                    <div className='text-sm py-2'>
                                        {28}
                                    </div>
                                </Tooltip> 
                            </button>


                            {/* down start */}
                            <div className='div_border'>

                            </div>
                            <div  style={{  height:"0px" }}>
                                    <Line1 style={ {
                                        position: "relative",
                                        top: 90
                                    } } />
                                
                            </div>
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(32))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                        teethData[32].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[32].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    > 
                                <div className='text-sm py-2'>
                                    {48}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[32].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[32].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethTop7 reverse={true} error={teethData[32].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>
                            <button  style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(31))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                        teethData[31].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[31].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    > 
                            <div className='text-sm py-2'>
                                    {47}
                                </div>  
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[31].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[31].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethTop7 reverse={true} error={teethData[31].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(30))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                        teethData[30].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[30].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    > 
                            <div className='text-sm py-2'>
                                    {46}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[30].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[30].height !==0 ? ("bg-red-700"):("") )}
                                    />            
                                <TeethTop6 reverse={true} error={teethData[30].diagnostics.length!==0} />
                                </Tooltip>
                            </button>
                            <button  style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(29))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                        teethData[29].diagnostics.length===0 ? (
                                            null 
                                        ):(
                                            teethData[29].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                        )
                                    }
                                    > 
                            <div className='text-sm py-2'>
                                    {45}
                                </div>     
                                    <hr style={ {
                                        position: "relative",
                                        top: -teethData[29].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[29].height !==0 ? ("bg-red-700"):("") )}
                                    />         
                                <Teeth5  reverse={true} error={teethData[29].diagnostics.length!==0} />
                                </Tooltip>
                            </button>
                            <button  onClick={()=>dispatch(setSelectedTeeth(28))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[28].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[28].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                            <div className='text-sm py-2'>
                                    {44}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[28].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[28].height !==0 ? ("bg-red-700"):("") )}
                                    />            
                                <Teeth4 reverse={true} error={teethData[28].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>  
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(27))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[27].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[27].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                                <div className='text-sm py-2'>
                                    {43}
                                </div> 
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[27].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[27].height !==0 ? ("bg-red-700"):("") )}
                                    />              
                                <Teeth3 reverse={true}  error={teethData[27].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>  
                            
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(26))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[26].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[26].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                            <div className='text-sm py-2'>
                                    {42}
                                </div>        
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[26].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[26].height !==0 ? ("bg-red-700"):("") )}
                                    />    
                                <Teeth1 rotate={true} reverse={true}  error={teethData[26].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>
                            
                            <button  style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(25))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[25].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[25].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                            <div className='text-sm py-2'>
                                    {41}
                                </div>
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[25].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[25].height !==0 ? ("bg-red-700"):("") )}
                                    />  
                                <Teeth2 reverse={true}  error={teethData[25].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>
                            {/* ////////////// */}
                            <span className={ lang==="Ar" ?  ' center-teeth-border-AR' : "center-teeth-border"}>
                                <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(17))} className='btn_svg w-full'>
                                <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                    teethData[17].diagnostics.length===0 ? (
                                        null 
                                    ):(
                                        teethData[17].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                    )
                                }
                                > 
                                    <div className='text-sm py-2'>
                                        {31}
                                    </div>     
                                    <hr style={ {
                                        position: "relative",
                                        top: -teethData[17].height+37,
                                        BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[17].height !==0 ? ("bg-red-700"):("") )}
                                        />  
                                    <Teeth2  error={teethData[17].diagnostics.length!==0} />
                                    </Tooltip>
                                </button>
                            </span>
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(18))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[18].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[18].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                            <div className='text-sm py-2'>
                                    {32}
                                </div>    
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[18].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[18].height !==0 ? ("bg-red-700"):("") )}
                                    />        
                                <Teeth1 rotate={true}  error={teethData[18].diagnostics.length!==0} />
                                </Tooltip>
                            </button>
                            
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(19))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[19].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[19].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                                <div className='text-sm py-2'>
                                    {33}
                                </div>       
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[19].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[19].height !==0 ? ("bg-red-700"):("") )}
                                    />       
                                <Teeth3  error={teethData[19].diagnostics.length!==0} />
                                </Tooltip>
                            </button>
                            <button onClick={()=>dispatch(setSelectedTeeth(20))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[20].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[20].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                                <div className='text-sm py-2'>
                                    {34}
                                </div>       
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[20].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[20].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <Teeth4 error={teethData[20].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>
                            <button style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(21))} className='btn_svg'>
                                <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                    teethData[21].diagnostics.length===0 ? (
                                        null 
                                    ):(
                                        teethData[21].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                    )
                                }
                                > 
                                <div className='text-sm py-2'>
                                    {35}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[21].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[21].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <Teeth5  error={teethData[21].diagnostics.length!==0}/>
                                </Tooltip>
                            </button>
                            <button  style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(22))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[22].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[22].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                                <div className='text-sm py-2'>
                                    {36}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[22].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[22].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <TeethTop6  error={teethData[22].diagnostics.length!==0} />
                                </Tooltip>
                            </button>
                            <button  style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(23))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[23].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[23].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }
                            > 
                                <div className='text-sm py-2'>
                                    {37}
                                </div>
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[23].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[23].height !==0 ? ("bg-red-700"):("") )}
                                    />  
                                <TeethTop7 error={teethData[23].diagnostics.length!==0} />
                                </Tooltip>
                            </button>
                            <button  style={{ translate:"0px 0px" }} onClick={()=>dispatch(setSelectedTeeth(24))} className='btn_svg'>
                            <Tooltip  mouseEnterDelay={.7}  placement="bottom" title={
                                teethData[24].diagnostics.length===0 ? (
                                    null 
                                ):(
                                    teethData[24].diagnostics.map((arr)=>( <p>{arr.ids_arr +'\t'} </p>  )) 
                                )
                            }>
                                <div className='text-sm py-2'>
                                    {38}
                                </div>
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[24].height+37,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[24].height !==0 ? ("bg-red-700"):("") )}
                                    />  
                                <TeethTop8 error={teethData[24].diagnostics.length!==0} />
                                </Tooltip>
                            </button>

                            
                        </div>
                        {/* <div>
                                <Background />
                            </div> */}
                    </div>

                </Col>
    )
}

export default Teeth

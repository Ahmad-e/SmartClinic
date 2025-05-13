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

const Teeth=(props)=> {
    var test = [1,2,3,4,5,6,7,8]

    const lin0Height = useSelector((state) => state.lin0Height);
    const sinus_1 = useSelector((state) => state.sinus_1);
    const sinus_2 = useSelector((state) => state.sinus_2);
    const lin1Height = useSelector((state) => state.lin1Height);
    const lin2Height = useSelector((state) => state.lin2Height);
    const teethData = useSelector((state) => state.teethData);

    const selectedTeeth = useSelector((state) => state.selectedTeeth);
  
    const {setSelectedTeeth,setLine1Height,setLine2Height} = modeActions;
    const dispatch = useDispatch();


    const lang = useSelector((state) => state.language);
    // console.log(teethData)


    return(
            <Col className='flex justify-start' style={{ overflow:"scroll" , maxHeight:'525px' }} lg={9} md={7} sm={12} > 
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
                                        top: 50
                                    } } />
                                
                            </div>

                            <button style={{ translate:"0px -3px" }} onClick={()=>dispatch(setSelectedTeeth(8))} className='btn_svg'>
                                    
                                <TeethDown8 rotate={ true }/>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[8].height-21,
                                    } }
                                    className={'line-hr '+( teethData[8].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <div className='text-sm py-3'>
                                    {18}
                                </div>
                            </button>
                            <button  onClick={()=>dispatch(setSelectedTeeth(7))} className='btn_svg'>
                                    
                                <TeethDown7  rotate={ true }/>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[7].height-24,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[7].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <div className='text-sm py-3'>
                                    {17}
                                </div>
                            </button>
                            <button  onClick={()=>dispatch(setSelectedTeeth(6))} className='btn_svg'>
                                                
                                <TeethDown6  rotate={ true }  />
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[6].height-24,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[6].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <div className='text-sm py-3'>
                                    {16}
                                </div>
                            </button>
                            <button style={{ translate:"0px 4px" }} onClick={()=>dispatch(setSelectedTeeth(5))} className='btn_svg'>
                                                
                                <Teeth5 rotate={ true }/>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[5].height-28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[5].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <div className='text-sm py-3'>
                                    {15}
                                </div>
                            </button>
                            <button onClick={()=>dispatch(setSelectedTeeth(4))} className='btn_svg'>
                                                
                                <Teeth4   rotate={ true }/>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[4].height-24,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[4].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <div className='text-sm py-3'>
                                    {14}
                                </div>
                            </button>  
                            <button style={{ translate:"0px -2px" }}  onClick={()=>dispatch(setSelectedTeeth(3))} className='btn_svg'>
                                                
                                <Teeth3  rotate={ true }/>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[3].height-22,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[3].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <div className='text-sm py-3'>
                                    {13}
                                </div>
                            </button>  
                            
                            <button style={{ translate:"0px 3px" }} onClick={()=>dispatch(setSelectedTeeth(2))} className='btn_svg'>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[2].height+30,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[2].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <Teeth1 />
                                <div   className='text-sm py-3'>
                                    {12}
                                </div>
                            </button>
                            <button style={{ translate:"0px -6px" }} onClick={()=>dispatch(setSelectedTeeth(1))} className='btn_svg'>
                            <hr style={ {
                                        position: "relative",
                                        top: teethData[1].height+38,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[1].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <Teeth2  rotate={ true }/>
                                <div className='text-sm py-3'>
                                    {11}
                                </div>
                            </button>
                            
                            {/* ////////////// */}
                            <span className={ lang==="Ar" ?  ' center-teeth-border-AR' : "center-teeth-border"}>
                                <button style={{ translate:"0px -7px" }} onClick={()=>dispatch(setSelectedTeeth(9))} className='btn_svg w-full'>
                                    <hr style={ {
                                            position: "relative",
                                            top: teethData[9].height+38,
                                            BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[9].height !==0 ? ("bg-red-700"):("") )}
                                        />            
                                    <Teeth2 rotate={ true } reverse={true}/>
                                    <div className='text-sm py-3'>
                                        {21}
                                    </div>
                                </button>
                            </span>

                            <button style={{ translate:"0px 3px" }} onClick={()=>dispatch(setSelectedTeeth(10))} className='btn_svg'>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[10].height+31,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[10].height !==0 ? ("bg-red-700"):("") )}
                                    />     
                                <Teeth1  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {22}
                                </div>
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(11))} className='btn_svg'>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[11].height+36,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[11].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <Teeth3  rotate={ true }  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {23}
                                </div>
                            </button>
                            <button onClick={()=>dispatch(setSelectedTeeth(12))} className='btn_svg'>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[12].height+34,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[12].height !==0 ? ("bg-red-700"):("") )}
                                    />   
                                <Teeth4  rotate={ true }  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {24}
                                </div>
                            </button>
                            <button style={{ translate:"0px 4px" }} onClick={()=>dispatch(setSelectedTeeth(13))} className='btn_svg'>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[13].height+30,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[13].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <Teeth5 rotate={ true }  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {25}
                                </div>
                            </button>
                            <button onClick={()=>dispatch(setSelectedTeeth(14))} className='btn_svg'>
                            <hr style={ {
                                        position: "relative",
                                        top: teethData[14].height+34,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[14].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethDown6 rotate={ true }  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {26}
                                </div>
                            </button>
                            <button onClick={()=>dispatch(setSelectedTeeth(15))} className='btn_svg'>
                            <hr style={ {
                                        position: "relative",
                                        top: teethData[15].height+34,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[15].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethDown7 rotate={ true }  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {27}
                                </div>
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(16))} className='btn_svg'>
                                <hr style={ {
                                        position: "relative",
                                        top: teethData[16].height+36,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[16].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethDown8 rotate={ true }  reverse={true}/>
                                <div className='text-sm py-3'>
                                    {28}
                                </div>
                            </button>


                            {/* down start */}
                            <div className='div_border'>

                            </div>
                            <div  style={{  height:"0px" }}>
                                    <Line1 style={ {
                                        position: "relative",
                                        top: 94
                                    } } />
                                
                            </div>
                            <button style={{ translate:"0px -5px" }} onClick={()=>dispatch(setSelectedTeeth(32))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {48}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[32].height+28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[32].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethTop7 reverse={true}/>
                                
                            </button>
                            <button  style={{ translate:"0px -5px" }} onClick={()=>dispatch(setSelectedTeeth(31))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {47}
                                </div>  
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[31].height+28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[31].height !==0 ? ("bg-red-700"):("") )}
                                    />
                                <TeethTop7 reverse={true}/>
                                
                            </button>
                            <button style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(30))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {46}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[30].height+25,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[30].height !==0 ? ("bg-red-700"):("") )}
                                    />            
                                <TeethTop6 reverse={true}  />
                                
                            </button>
                            <button  style={{ translate:"0px -5px" }} onClick={()=>dispatch(setSelectedTeeth(29))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {45}
                                </div>     
                                    <hr style={ {
                                        position: "relative",
                                        top: -teethData[29].height+28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[29].height !==0 ? ("bg-red-700"):("") )}
                                    />         
                                <Teeth5 reverse={true}/>
                                
                            </button>
                            <button  onClick={()=>dispatch(setSelectedTeeth(28))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {44}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[28].height+23,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[28].height !==0 ? ("bg-red-700"):("") )}
                                    />            
                                <Teeth4 reverse={true}/>
                                
                            </button>  
                            <button style={{ translate:"0px 2px" }} onClick={()=>dispatch(setSelectedTeeth(27))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {43}
                                </div> 
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[27].height+21,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[27].height !==0 ? ("bg-red-700"):("") )}
                                    />              
                                <Teeth3 reverse={true}/>
                                
                            </button>  
                            
                            <button style={{ translate:"0px -3px" }} onClick={()=>dispatch(setSelectedTeeth(26))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {42}
                                </div>        
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[26].height+26,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[26].height !==0 ? ("bg-red-700"):("") )}
                                    />    
                                <Teeth1 rotate={true} reverse={true}/>
                                
                            </button>
                            
                            <button  style={{ translate:"0px 2px" }} onClick={()=>dispatch(setSelectedTeeth(25))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {41}
                                </div>
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[25].height+22,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[25].height !==0 ? ("bg-red-700"):("") )}
                                    />  
                                <Teeth2 reverse={true}/>
                                
                            </button>
                            {/* ////////////// */}
                            <span className={ lang==="Ar" ?  ' center-teeth-border-AR' : "center-teeth-border"}>
                                <button style={{ translate:"0px 2px" }} onClick={()=>dispatch(setSelectedTeeth(17))} className='btn_svg w-full'>
                                    <div className='text-sm py-3'>
                                        {31}
                                    </div>     
                                    <hr style={ {
                                        position: "relative",
                                        top: -teethData[17].height+21,
                                        BackgroundColor:"#111"
                                        } }
                                        className={'line-hr '+( teethData[17].height !==0 ? ("bg-red-700"):("") )}
                                        />  
                                    <Teeth2 />
                                    
                                </button>
                            </span>
                            <button style={{ translate:"0px -3px" }} onClick={()=>dispatch(setSelectedTeeth(18))} className='btn_svg'>
                            <div className='text-sm py-3'>
                                    {32}
                                </div>    
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[18].height+26,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[18].height !==0 ? ("bg-red-700"):("") )}
                                    />        
                                <Teeth1 rotate={true} />
                                
                            </button>
                            
                            <button style={{ translate:"0px 2px" }} onClick={()=>dispatch(setSelectedTeeth(19))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {33}
                                </div>       
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[19].height+21,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[19].height !==0 ? ("bg-red-700"):("") )}
                                    />       
                                <Teeth3 />
                                
                            </button>
                            <button onClick={()=>dispatch(setSelectedTeeth(20))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {34}
                                </div>       
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[20].height+23,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[20].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <Teeth4/>
                                
                            </button>
                            <button style={{ translate:"0px -5px" }} onClick={()=>dispatch(setSelectedTeeth(21))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {35}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[21].height+28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[21].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <Teeth5/>
                                
                            </button>
                            <button  style={{ translate:"0px -2px" }} onClick={()=>dispatch(setSelectedTeeth(22))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {36}
                                </div>   
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[22].height+25,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[22].height !==0 ? ("bg-red-700"):("") )}
                                    />      
                                <TeethTop6 />
                                
                            </button>
                            <button  style={{ translate:"0px -5px" }} onClick={()=>dispatch(setSelectedTeeth(23))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {37}
                                </div>
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[23].height+28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[23].height !==0 ? ("bg-red-700"):("") )}
                                    />  
                                <TeethTop7 />
                                
                            </button>
                            <button  style={{ translate:"0px -5px" }} onClick={()=>dispatch(setSelectedTeeth(24))} className='btn_svg'>
                                <div className='text-sm py-3'>
                                    {38}
                                </div>
                                <hr style={ {
                                        position: "relative",
                                        top: -teethData[24].height+28,
                                        BackgroundColor:"#111"
                                    } }
                                    className={'line-hr '+( teethData[24].height !==0 ? ("bg-red-700"):("") )}
                                    />  
                                <TeethTop7 />
                                
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

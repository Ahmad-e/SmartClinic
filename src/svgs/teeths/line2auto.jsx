import * as React from 'react';
import { useSelector } from 'react-redux';
const Svg=(props)=> {
    const mode = useSelector((state) => state.mode);
    return(
        <div>
              
                 <svg  className={ ( props.reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_svg ' + (props.rotate===true ? ("teeth_svg_top") : ("")) } version="1.0"  width="100.000000pt" height="95.000000pt" viewBox="0 0 300.000000 95.000000"  preserveAspectRatio="xMidYMid meet">  <g fill="#89898925" transform="translate(0.000000,95.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M7 933 c-16 -15 -10 -20 88 -79 148 -88 389 -212 546 -279 35 -15 78 -34 96 -41 306 -134 765 -234 1071 -234 105 0 348 25 388 40 14 6 47 15 73 20 25 6 62 17 81 24 19 8 60 24 90 36 116 46 276 155 361 246 82 88 185 245 174 264 -14 22 -32 6 -73 -65 -55 -95 -197 -245 -290 -306 -41 -27 -76 -49 -79 -49 -3 0 -18 -9 -34 -21 -16 -11 -29 -17 -29 -14 0 4 -16 -2 -36 -14 -19 -12 -43 -21 -53 -21 -9 0 -21 -4 -27 -9 -18 -19 -211 -64 -329 -77 -253 -29 -546 -6 -795 62 -30 8 -65 17 -76 19 -39 6 -324 101 -389 130 -16 7 -78 34 -136 59 -102 44 -310 148 -394 196 -22 12 -58 33 -80 45 -22 13 -60 35 -85 49 -49 28 -53 29 -63 19z"/> </g> </svg> 
        </div>
    )
}

export default Svg
import * as React from 'react';
import { useSelector } from 'react-redux';
const Svg=(props)=> {
    const mode = useSelector((state) => state.mode);
    return(
        <div>
             <svg version="1.0"
             className={  ( props. reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_svg ' + (props.rotate===true ? ("teeth_svg_top") : ("")) }
                width="50.000000pt" height="50.000000pt" viewBox="0 0 120.000000 183.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
                fill="#fff" stroke="none">
                <path d="M327 1586 c-52 -19 -63 -31 -82 -84 -38 -112 -28 -302 23 -430 l27
                -67 318 -3 318 -2 18 43 c69 160 66 456 -4 527 -23 22 -35 25 -114 28 -76 3
                -97 0 -150 -21 l-62 -25 -46 20 c-60 26 -193 34 -246 14z"/>
                <path d="M284 933 c-3 -10 -10 -29 -15 -43 -31 -92 -39 -298 -14 -395 41 -158
                137 -279 202 -254 38 14 45 41 28 114 -26 116 -22 149 39 272 30 60 62 115 70
                122 9 8 16 22 16 32 0 39 20 17 36 -38 24 -84 67 -174 129 -273 30 -47 62
                -104 71 -126 33 -80 82 -105 120 -63 21 24 21 4 6 384 -5 132 -13 250 -17 263
                l-7 22 -329 0 c-305 0 -330 -1 -335 -17z"/>
                </g>
            </svg>
        </div>
    )
}

export default Svg
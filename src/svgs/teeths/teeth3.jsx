import * as React from 'react';
import { useSelector } from 'react-redux';
import Test from '../../images/33.png'
const Svg=(props)=> {
    const mode = useSelector((state) => state.mode);
    return(
        <div>
            <img 
                src={Test}
                className={  ( props. reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_img ' + (props.rotate===true ? (" teeth_svg_top") : (""))+ ( props.error ? " btn_svg_dignose":" ") }
                width="10.000000pt" height="10.000000pt"
            />
            {/* <svg version="1.0"
            className={  ( props. reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_svg ' + (props.rotate===true ? ("teeth_svg_top") : (""))+ ( props.error ? " btn_svg_dignose":" ") }
                width="50.000000pt" height="50.000000pt" viewBox="0 0 99.000000 216.000000"
                preserveAspectRatio="xMidYMid meet">
            
                <g transform="translate(0.000000,216.000000) scale(0.100000,-0.100000)"
                fill="#fff" stroke="none">
                <path d="M442 2060 c-11 -11 -34 -39 -50 -62 -16 -24 -53 -64 -82 -91 l-53
                -47 6 -138 c6 -138 29 -303 49 -354 l10 -28 179 0 178 0 11 39 c36 135 56 452
                31 498 -6 13 -39 41 -72 63 -33 23 -76 63 -97 90 -42 55 -74 64 -110 30z"/>
                <path d="M307 1268 c-15 -57 -18 -268 -8 -418 22 -310 75 -611 125 -710 19
                -38 27 -45 51 -45 22 0 33 8 48 33 16 28 21 63 28 195 7 147 11 176 48 307 76
                266 113 503 97 614 l-7 46 -189 0 c-186 0 -188 0 -193 -22z"/>
                </g>
                </svg> */}
        </div>
    )
}

export default Svg

{/*             <g transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)"  stroke="none"> 
                   <path fill='#4DA1A9' d="M828 1831 c-25 -10 -59 -28 -75 -39 -28 -20 -31 -20 -59 -5 -92 50 -106 53 -150 35 -56 -24 -69 -61 -69 -202 0 -137 16 -202 60 -252 l24 -28 274 0 274 0 32 65 c28 56 33 79 38 167 7 130 -5 181 -50 208 -18 11 -40 20 -50 20 -10 0 -44 11 -77 25 -70 29 -108 31 -172 6z"/> <path d="M531 1283 c-28 -54 -46 -183 -46 -328 0 -130 4 -164 27 -255 15 -58 29 -137 31 -177 4 -79 17 -103 53 -103 53 0 78 62 89 225 15 205 55 325 109 325 18 0 27 -9 40 -40 9 -22 16 -46 16 -53 0 -20 49 -119 88 -177 37 -55 37 -56 37 -160 0 -58 4 -111 8 -117 14 -22 52 -14 81 16 58 61 93 257 82 471 -6 126 -38 337 -57 371 -9 18 -26 19 -279 19 -246 0 -270 -1 -279 -17z"/>
                    <path d="M766 922 c-34 -65 -48 -154 -43 -262 6 -126 18 -169 59 -215 34 -39 57 -44 81 -17 15 16 16 29 6 103 -6 46 -7 110 -4 142 6 47 2 74 -20 145 -46 148 -52 156 -79 104z"/> 
                </g>  */}
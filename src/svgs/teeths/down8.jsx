import * as React from 'react';
import { useSelector } from 'react-redux';
import Test from '../../images/28.png';

const Svg=(props)=> {
    const mode = useSelector((state) => state.mode);
    return(
        <div>
            <img 
                src={Test}
                className={  ( props. reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_img ' + (props.rotate!==true ? (" teeth_svg_top") : (""))+ ( props.error ? " btn_svg_dignose":" ") }
                width="10.000000pt" height="10.000000pt"
            />
            {/* <svg version="1.0"
            className={ ( props. reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_svg ' + (props.rotate===true ? ("teeth_svg_top ") : (" ")) + ( props.error ? " btn_svg_dignose":" ") }
                width="50.000000pt" height="50.000000pt" viewBox="0 0 107.000000 196.000000"
                preserveAspectRatio="xMidYMid meet">
               <g transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
                fill="#fff" stroke="none">
                <path d="M172 1735 c-53 -67 -51 -281 5 -425 l29 -75 311 -3 312 -2 24 32 c14
                18 35 61 47 95 20 55 22 76 18 185 -5 141 -21 192 -65 209 -23 9 -36 7 -72
                -11 -37 -18 -48 -19 -79 -9 -49 16 -139 5 -175 -21 l-29 -22 -48 21 c-30 13
                -70 21 -103 21 -30 0 -71 7 -90 15 -50 21 -62 19 -85 -10z"/>
                <path d="M196 1165 c-14 -38 -28 -195 -21 -259 14 -153 84 -428 125 -494 23
                -37 57 -54 82 -41 25 13 36 62 43 184 5 94 11 124 43 208 34 90 52 118 52 82
                0 -9 18 -51 40 -95 40 -79 40 -81 40 -192 0 -125 10 -176 40 -203 18 -17 21
                -17 52 2 75 43 146 200 169 373 13 94 7 267 -11 378 l-13 72 -317 0 c-271 0
                -319 -2 -324 -15z"/>
                </g>
                </svg> */}
        </div>
    )
}

export default Svg
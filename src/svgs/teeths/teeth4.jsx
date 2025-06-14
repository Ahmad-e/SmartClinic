import * as React from 'react';
import { useSelector } from 'react-redux';
import Test from '../../images/34.png';

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
            className={  ( props. reverse===true ? "teeth_svg_reverse" :"" ) + ' teeth_svg ' + (props.rotate===true ? ("teeth_svg_top ") : (" "))+ ( props.error ? " btn_svg_dignose":" ") }
                width="50.000000pt" height="50.000000pt" viewBox="0 0 91.000000 216.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g transform="translate(0.000000,216.000000) scale(0.100000,-0.100000)"
                fill="#fff" stroke="none">
                    <path d="M465 1866 c-16 -7 -50 -22 -75 -33 -25 -12 -66 -24 -92 -28 -85 -13
                    -83 -8 -82 -217 1 -124 5 -199 15 -233 l14 -50 223 -3 222 -2 11 27 c31 82 42
                    154 41 273 -1 176 -2 177 -94 210 -42 14 -87 33 -99 41 -38 24 -52 27 -84 15z"/>
                    <path d="M243 1093 c9 -212 37 -353 107 -528 94 -237 248 -388 306 -300 18 28
                    19 26 -50 208 -14 37 -26 87 -26 110 0 24 22 123 50 220 60 217 70 269 70 369
                    l0 78 -231 0 -232 0 6 -157z"/>
                </g>
            </svg> */}
        </div>
    )
}

export default Svg
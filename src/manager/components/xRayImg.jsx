import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Slider } from 'antd';
const XRayIMG=()=> {

    
    const UploadImg = (event) =>{
        if(event.target.files[0]){
            const files = (event.target.files[0]);
            setImg(files);
        }
    }
    const [filter1, setFilter1] = React.useState(0);
    const [filter2, setFilter2] = React.useState(0);
    const [filter3, setFilter3] = React.useState(100);
    const [filter4, setFilter4] = React.useState(100);
    const [filter5, setFilter5] = React.useState(100);


    const [img, setImg] = React.useState('');

    if(img === '' )
        return(
            <>
                <label  className="main-btn " for="file-upload" >
                    upload XRay image
                </label>
                <input onChange={UploadImg} id="file-upload" type="file" />
            </>
        )

            


    return(
        <Container>
            <Row>
                <Col lg={8} md={6} sm={12}>
                    <img
                        className='xray-img' src={URL.createObjectURL(img)} 
                        style={{ 
                            filter:
                                "grayscale("+filter1+"%) " +
                                "hue-rotate("+filter2+"deg) " +
                                "contrast("+filter3+"%) " +
                                "saturate("+filter4+"%) " +
                                "Brightness("+filter5+"%) " 
                         }} 
                    />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='p-3 pt-0'>
                        <Slider value={filter1} onChange={(e)=>setFilter1(e)} />
                    </div>
                    <div className='p-3'>
                        <Slider min={0} max={360} value={filter2} onChange={(e)=>setFilter2(e)} />
                    </div>
                    <div className='p-3'>
                        <Slider min={0} max={400} value={filter3} onChange={(e)=>setFilter3(e)} />
                    </div>
                    <div className='p-3'>
                        <Slider  min={0} max={400} value={filter4} onChange={(e)=>setFilter4(e)} />
                    </div>
                    <div className='p-3 pb-0'>
                        <Slider min={0} max={400} value={filter5} onChange={(e)=>setFilter5(e)} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default XRayIMG

/* The .image-container class needs to be applied to a div wrapped around the image you want to apply this filter to */
// .image-container {
//     display: inline-block;
//     position: relative;
//     line-height: 0;
//     background: #ffffff;
//   }
//   .image-container::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     mix-blend-mode: screen;
//     background: #fa00cc;
//     opacity: 0.5;
//   }
//   .image-container > img {
//     -webkit-filter:    grayscale(100%) hue-rotate(5deg) invert(0%) opacity(100%) saturate(100%) sepia(0%);
//             filter:    grayscale(100%) hue-rotate(5deg) invert(0%) opacity(100%) saturate(100%) sepia(0%);
//     mix-blend-mode: none;
//   }




/* The .image-container class needs to be applied to a div wrapped around the image you want to apply this filter to */
// .image-container {
//     display: inline-block;
//     position: relative;
//     line-height: 0;
//     background: #ffffff;
//   }
//   .image-container::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     mix-blend-mode: none;
//     background: #faaa00;
//     opacity: 0.13;
//   }
//   .image-container > img {
//     -webkit-filter:  brightness(103%) contrast(300%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(0%) sepia(0%);
//             filter:  brightness(103%) contrast(300%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(0%) sepia(0%);
//     mix-blend-mode: none;
//   }
  
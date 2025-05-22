import { Select, Slider, Input ,Skeleton    } from 'antd';
import AppButton from '../component/button'
import { useSelector } from 'react-redux';


import { useTranslation } from 'react-i18next';
import * as React from 'react';

import Loading from '../component/loading'
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App=()=> {

    const token = useSelector(state => state.token);
    const url = useSelector((state) => state.apiURL);

    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(true);


    const [fontFamily, setFontFamily] = React.useState("");
    const [textSize, setTextSize] = React.useState(20);
    const [textColor, setTextColor] = React.useState("");
    const [oldImg, setOldImg]=React.useState(null);
    const [img, setImg]=React.useState(null);

    const [newLoad, setNewLoad] = React.useState(false);
    const [idToChange, setIdToChange] = React.useState(0);


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        
      axios.get( url + "api/pdf-settings/",
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              if(response.data.length===0)
                setNewLoad(true)
              setIdToChange(response.data[0].id)
              setFontFamily(response.data[0].font_name);
              setTextSize(response.data[0].font_size);
              setOldImg(response.data[0].image)
              setData(response.data.data);
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }, []);

    const handleChange = (value) => {
        setFontFamily(value)
      };
    const UploadImg=(e)=>{
        if(e.target.files[0]){
            const files = (e.target.files[0]);
            setImg(files);
        }
    }


    const Save_data=()=>{
        if(!newLoad){
            setLoading(true)
            console.log("update data")
            try {
                
                const formData = new FormData();
                if(img!==null)
                    formData.append('image', img);
                formData.append('font_name', fontFamily);
                formData.append('font_size', textSize);
                formData.append('font_color', textColor);
                
                const response = axios.put( url + 'api/pdf-settings/'+idToChange+"/", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + token,
                        'Accept': "application/json"
                    }
                  }).then((response) => {
                    setLoading(false)
                    console.log(response.data)
                    setFontFamily(response.data.font_name);
                    setTextSize(response.data.font_size);

                    
                }).catch((error) => {
                    console.log(error)
                    setLoading(false)
              });
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        else{
            setLoading(true)
        
            try {
            
            const formData = new FormData();
            if(img!==null)
                formData.append('image', img);
            formData.append('font_name', fontFamily);
            formData.append('font_size', textSize);
            formData.append('font_color', textColor);
            
            const response = axios.post( url + 'api/pdf-settings/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token,
                    'Accept': "application/json"
                }
                }).then((response) => {
                    
                console.log(response.data)
                
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        }

    }


    return(
        <Container  >
            <Loading loading={loading} />
            <Row className='justify-center pt-3'>
                
                <Col lg={6} md={8} sm={11} className='p-3' >
                    <div className='py-3' >
                        <label  className="main-btn " for="file-upload" >
                            {t("upload_logo")}
                        </label>
                        <input onChange={UploadImg}  accept="image/*" id="file-upload" type="file" />
                    </div>
                    <div className="py-3">
                        {t("font_setting")}
                    </div>
                    
                    <div className='py-3' >
                        <Select
                            placeholder={t("font_style")}
                            value={fontFamily}
                            style={{ width: 320 }}
                            onChange={handleChange}
                            options={[
                                { value: 'Cairo', label: 'خط عربي' },
                                { value: 'Arial', label: 'Arial' },
                                { value: 'Helvetica', label: 'Helvetica' },
                                { value: 'Noto Sans Arabic', label: 'Noto Sans Arabic' },
                                { value: 'Tahoma', label: 'Tahoma' },
                                { value: 'Verdana', label: 'Verdana' },
                                { value: 'sans-serif', label: 'Sans Serif' },
                                { value: 'cursive', label: 'cursive' },
                                { value: 'fantasy', label: 'fantasy' },
                                { value: 'math', label: 'math' },
                                { value: 'system-ui', label: 'system-ui' }
                                
                            ]}
                            />
                        </div>
                        <div className='flex justify-center py-3' >
                            <div>
                                <label>{t("font_size")}</label> 
                                <Slider style={{ width: 320 }} value={textSize} onChange={(e)=>setTextSize(e)} min={10} max={50} step={5}  />
                            </div>
                        </div>
                        <div className='py-3' >
                            <label className='p-1'>{t("font_color")}  </label> <br/>
                            <Input onChange={(e)=>setTextColor(e.target.value)} style={{ width: 220 }} placeholder="selecte color" type='color' />
                        </div>
                        
                        <div className='py-3'>
                            <AppButton onClick={()=>Save_data()} text={t("save_data")} />
                        </div>
                </Col>
                <Col dir='ltr'  lg={6} md={8} sm={11} className='p-3 flex justify-center' >
                    <div style={{ fontFamily: fontFamily }} className='test_pdf' >
                        <p>
                            {
                                img!==null ? (<img className='pdf_logo' src={URL.createObjectURL(img)} />) : (
                                    oldImg!==null ? (<img className='pdf_logo' src={(oldImg)} />) : ("")
                                )
                            }
                        </p>
                        <p style={{ fontSize : textSize , margin : (textSize/3) , color: textColor }}>
                            Title
                        </p>
                        <p style={{ fontSize : (textSize/2) , margin : (textSize/5) }} >
                            description about clinic
                        </p>
                        <p>
                            <Skeleton />
                        </p>
                        

                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default App
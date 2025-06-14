import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DownOutlined, UserOutlined,ClearOutlined } from '@ant-design/icons';
import {  Dropdown, Select, Space} from 'antd';
import { Slider, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "../../store";
import axios from "axios";
import Loading from "../../component/loading";

import TeethDashbord from './teethDashbord';


const Diagnostic=()=> {

    var test =[1,2,3,4,5,6,7,8]
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      setLoading(true);
      axios.get( url + "api/diagnosis_cats/",
          {
          headers:{
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' +token ,
              'Accept':"application/json"
          }
          })
          .then((response) => {
              console.log(response.data)
              setData(response.data.data)
              setLoading(false)

          })
          .catch((error) =>{ 
              console.log(error);
              setLoading(false) });
  }, []);


    const lin0Height = useSelector((state) => state.lin0Height);
    const lin1Height = useSelector((state) => state.lin1Height);
    const lin2Height = useSelector((state) => state.lin2Height);
    const teethData = useSelector((state) => state.teethData);
    const selectedTeeth = parseInt(useSelector((state) => state.selectedTeeth));
  
    const sinus_1 = useSelector((state) => state.sinus_1);
    const sinus_2 = useSelector((state) => state.sinus_2);

    var test_ = teethData[selectedTeeth].height
    const {setLine0Height,setSinus_1,setSinus_2,setLine1Height,setLine2Height,setTeethHeight ,setDiagnosis,setSelectedTeeth} = modeActions;
    const dispatch = useDispatch();

    const [diagnostics, setDiagnostics] = React.useState( [
        { cat_id: 1, ids_arr: [] },
        { cat_id: 2, ids_arr: [] },
        { cat_id: 3, ids_arr: [] },
        { cat_id: 4, ids_arr: [] },
        { cat_id: 5, ids_arr: [] },
        { cat_id: 6, ids_arr: [] },
        { cat_id: 7, ids_arr: [] },
        { cat_id: 8, ids_arr: [] }
      ]);
    const diagnosticsRef = React.useRef([]);
  
    // تحديث المرجع عند كل تغيير في الحالة
    React.useEffect(() => {
      diagnosticsRef.current = diagnostics;
    }, [diagnostics]);
  
    const updateDiagnostics = (newItem) => {
      const current = [...diagnosticsRef.current]; // نستخدم النسخة الحية
  
      const existingIndex = current.findIndex(
        (item) => item.cat_id === newItem.cat_id
      );
  
      if (existingIndex !== -1) {
        current[existingIndex] = {
          ...current[existingIndex],
          ids_arr: newItem.ids_arr,
        };
      } else {
        current.push(newItem);
      }
  
      // تحديث state والمرجع
      setDiagnostics(current);
      diagnosticsRef.current = current;
    };


    const handleChange = (value,cat_id) => {
        updateDiagnostics({ 
            cat_id: cat_id,
             ids_arr: value
        });
        console.log({ 
            cat_id: cat_id,
            ids_arr: value
        });
      };

      
    const [refreshDiagnosticsArr, setRefreshDiagnosticsArr] =  React.useState(true);
    React.useEffect(() => {
        if(refreshDiagnosticsArr)
            dispatch(setDiagnosis(diagnostics));
        else
            setRefreshDiagnosticsArr(true)
      }, [diagnostics]);

    React.useEffect(() => {
        setRefreshDiagnosticsArr(false)
        setDiagnostics( [
            { cat_id: 1, ids_arr: [] },
            { cat_id: 2, ids_arr: [] },
            { cat_id: 3, ids_arr: [] },
            { cat_id: 4, ids_arr: [] },
            { cat_id: 5, ids_arr: [] },
            { cat_id: 6, ids_arr: [] },
            { cat_id: 7, ids_arr: [] },
            { cat_id: 8, ids_arr: [] }
          ]);
      }, [selectedTeeth]);

    function convertArray(inputArray) {
        return inputArray.map(item => ({
            value: item.name ,
            label: item.name
        }));
    }
    

    return(
        <Container>
            <Loading loading={loading} />
            <Row className='justify-center pt-3'>

                <TeethDashbord />

                <Col lg={3} md={5} sm={12} >
                    <Row className='p-4' >
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                sinus line 1
                            </p>
                            <Slider max={40} min={-40} value={sinus_1} onChange={(e)=>dispatch(setSinus_1(e))} />
                        </Col>
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                sinus line 2
                            </p>
                            <Slider max={40} min={-40} value={sinus_2} onChange={(e)=>dispatch(setSinus_2(e))} />
                        </Col>
                        <Col lg={12}  xs={12}>
                            <p className='mt-1 text-start'>
                                height selected teeth
                            </p>
                            <Slider disabled={selectedTeeth===0} value={test_}  onChange={(e)=>dispatch(setTeethHeight(e))} max={0} min={-30}   />
                        </Col>
                        
                        {
                            data.map((item,index)=>{
                                return(
                                <Col lg={12}  xs={12}>

                                    <Select
                                        disabled={selectedTeeth===0}
                                        className='dropDown_diag'
                                        mode="multiple"
                                        value={( teethData[selectedTeeth].diagnostics[index]===undefined ? [] : teethData[selectedTeeth].diagnostics[index].ids_arr )}
                                        placeholder={item.name}
                                        onChange={(e)=>handleChange(e,item.id)}
                                        options={convertArray(item.subcats)}
                                        />
                                </Col> 
                                )
                            })
                        }
                    </Row>
                </Col>
                <button onClick={()=>console.log(teethData)} >
                    test
                </button>
                
            </Row>
            <Row className='justify-center pt-3'>
                
                <Col lg={6} sm={12} >
                    <div className='teeth-list'>
                        {
                            teethData.map((item,index)=>{
                                if(index>0 && index<=8 )
                                return(
                                    <div className='row-list'>
                                        <span>
                                            {item.number}
                                        </span>
                                        <div>
                                            {item.diagnostics.map((subItem)=>(
                                                <>
                                                    {subItem.ids_arr.map((value)=>(
                                                        <span className='item_in_bord'>
                                                        {value/*.slice(2) + "  "*/ }
                                                        
                                                        </span>))}
                                                </>

                                            ))}
                                        </div>
                                        <span onClick={()=>{
                                            dispatch(setSelectedTeeth(index))
                                            setDiagnostics( [
                                                { cat_id: 1, ids_arr: [] },
                                                { cat_id: 2, ids_arr: [] },
                                                { cat_id: 3, ids_arr: [] },
                                                { cat_id: 4, ids_arr: [] },
                                                { cat_id: 5, ids_arr: [] },
                                                { cat_id: 6, ids_arr: [] },
                                                { cat_id: 7, ids_arr: [] },
                                                { cat_id: 8, ids_arr: [] }
                                              ]);
                                        }} 
                                        className='clear-button'
                                        >
                                            
                                            <ClearOutlined />
                                        </span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </Col>
                <Col lg={6} sm={12} >
                <div className='teeth-list'>
                {
                            teethData.map((item,index)=>{
                                if(index>8 && index<=16 )
                                return(
                                    <div className='row-list'>
                                        <span>
                                            {item.number}
                                        </span>
                                        <div>
                                            {item.diagnostics.map((subItem)=>(
                                                <>
                                                    {subItem.ids_arr.map((value)=>(
                                                        <span className='item_in_bord'>
                                                        {value/*.slice(2) + "  "*/}
                                                        
                                                        </span>))}
                                                </>

                                            ))}
                                        </div>
                                        <span onClick={()=>{
                                            dispatch(setSelectedTeeth(index))
                                            setDiagnostics( [
                                                { cat_id: 1, ids_arr: [] },
                                                { cat_id: 2, ids_arr: [] },
                                                { cat_id: 3, ids_arr: [] },
                                                { cat_id: 4, ids_arr: [] },
                                                { cat_id: 5, ids_arr: [] },
                                                { cat_id: 6, ids_arr: [] },
                                                { cat_id: 7, ids_arr: [] },
                                                { cat_id: 8, ids_arr: [] }
                                              ]);
                                        }} 
                                        className='clear-button'
                                        >
                                            
                                            <ClearOutlined />
                                        </span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </Col>
                <Col lg={6} sm={12} >
                <div className='teeth-list'>
                    {
                            teethData.map((item,index)=>{
                                if(index>16 && index<=24 )
                                return(
                                    <div className='row-list'>
                                        <span>
                                            {item.number}
                                        </span>
                                        <div>
                                            {item.diagnostics.map((subItem)=>(
                                                <>
                                                    {subItem.ids_arr.map((value)=>(
                                                        <span className='item_in_bord'>
                                                        {value/*.slice(2) + "  "*/ }
                                                        
                                                        </span>))}
                                                </>

                                            ))}
                                        </div>
                                        <span onClick={()=>{
                                            dispatch(setSelectedTeeth(index))
                                            setDiagnostics( [
                                                { cat_id: 1, ids_arr: [] },
                                                { cat_id: 2, ids_arr: [] },
                                                { cat_id: 3, ids_arr: [] },
                                                { cat_id: 4, ids_arr: [] },
                                                { cat_id: 5, ids_arr: [] },
                                                { cat_id: 6, ids_arr: [] },
                                                { cat_id: 7, ids_arr: [] },
                                                { cat_id: 8, ids_arr: [] }
                                              ]);
                                        }} 
                                        className='clear-button'
                                        >
                                            
                                            <ClearOutlined />
                                        </span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </Col>
                <Col lg={6} sm={12} >
                    <div className='teeth-list'>
                        {
                            teethData.map((item,index)=>{
                                if(index>24 && index<=32 )
                                return(
                                    <div className='row-list'>
                                        <span>
                                            {item.number}
                                        </span>
                                        <div>
                                            {item.diagnostics.map((subItem)=>(
                                                <>
                                                    {subItem.ids_arr.map((value)=>(
                                                        <span className='item_in_bord'>
                                                        {value /*.slice(2) + "  "*/ }
                                                        
                                                        </span>))}
                                                </>

                                            ))}
                                        </div>
                                        <span onClick={()=>{
                                            dispatch(setSelectedTeeth(index))
                                            setDiagnostics( [
                                                { cat_id: 1, ids_arr: [] },
                                                { cat_id: 2, ids_arr: [] },
                                                { cat_id: 3, ids_arr: [] },
                                                { cat_id: 4, ids_arr: [] },
                                                { cat_id: 5, ids_arr: [] },
                                                { cat_id: 6, ids_arr: [] },
                                                { cat_id: 7, ids_arr: [] },
                                                { cat_id: 8, ids_arr: [] }
                                              ]);
                                        }} 
                                        className='clear-button'
                                        >
                                            
                                            <ClearOutlined />
                                        </span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Diagnostic
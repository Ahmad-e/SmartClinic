import * as React from 'react';
import Front from './front'

import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../component/loading";
import { useParams } from "react-router"

const OverView=()=> {
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [refresh, setRefresh] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { id } = useParams();

    const [data, setData] = React.useState([]);
    const [visits, setstVisi] = React.useState([]);

    React.useEffect(() => {

        if(id==="0"){
            setLoading(true);
            axios.get( url + "api/visites/list",
                {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' +token ,
                    'Accept':"application/json"
                }
                })
                .then((response) => {
                    console.log(response.data)
                    // setData(response.data.data)
                    setstVisi(response.data)
                    setLoading(false)
    
                })
                .catch((error) =>{ 
                    console.log(error);
                    setLoading(false) });
        }
        else{
            setLoading(true);
            axios.get( url + "api/patient/"+id+"/visits/",
                {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' +token ,
                    'Accept':"application/json"
                }
                })
                .then((response) => {
                    console.log(response.data)
                    setstVisi(response.data)
                    setLoading(false)
                })
                .catch((error) =>{ 
                    console.log(error);
                    setLoading(false) });
        }
        console.log("load data")
    }, [refresh]);



    const Add_data=(data)=>{
        console.log("start sending data")
        
        setLoading(true)
        
        try {
          
          const formData = new FormData();
          formData.append('patient', id);
          formData.append('notes', data);
          
          const response = axios.post( url + 'api/visites/', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + token,
                  'Accept': "application/json"
              }
            }).then((response) => {
              console.log(response.data)
              setRefresh(true)
              setLoading(false)
          }).catch((error) => {
              console.log(error)
              setLoading(false)
        });
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
    }


    return(
        <>
            <Loading loading={loading} />
            {
                loading===false ? (
                    <Front onAdd={(data)=>Add_data(data)}  visits={visits} data={data} />
                ) : ("")
            }
            
        </>
       
    )
}

export default OverView
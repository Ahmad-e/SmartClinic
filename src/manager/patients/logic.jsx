import * as React from 'react';
import Front from './front'

import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../component/loading";


const OverView=()=> {
    const url = useSelector(state => state.apiURL);
    const token = useSelector(state => state.token);
    const [refresh, setRefresh] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      setLoading(true);
      axios.get( url + "api/patients/",
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
  }, [refresh]);



    const Add_data=(data)=>{
        console.log("start sending data")
        
        setLoading(true)
        
        try {
          
          const formData = new FormData();
          formData.append('firstname', data.firstname);
          formData.append('lastname', data.lastname);
          formData.append('gender', data.gander);
          formData.append('phonenumber', data.phonenumber);
          formData.append('address', data.address);
          formData.append('birthdate', data.birthdate);
          formData.append('email', data.email);
          
          const response = axios.post( url + 'api/patients/add/', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + token,
                  'Accept': "application/json"
              }
            }).then((response) => {
                
              console.log(response.data)
              setRefresh(true)
          }).catch((error) => {
              console.log(error)
              setLoading(false)
        });
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
    }

    const Change_data=(data)=>{
        console.log("start sending data");
        console.log(data);
        setLoading(true)
        
        try {
          
          const formData = new FormData();
          formData.append('firstname', data.firstname);
          formData.append('lastname', data.lastname);
          formData.append('gender', data.gander);
          formData.append('phonenumber', data.phonenumber);
          formData.append('address', data.address);
          formData.append('birthdate', data.birthdate);
          formData.append('email', data.email);
          
          const response = axios.put( url + 'api/patients/update/'+data.id+"/", formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': 'Bearer ' + token,
                  'Accept': "application/json"
              }
            }).then((response) => {
            //   setLoading(false)
              console.log(response.data)
              setRefresh(true)
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
                    <Front onChange={(e)=>Change_data(e)} onAdd={(data)=>Add_data(data)} data={data} />
                ) : ("")
            }
            
        </>
       
    )
}

export default OverView
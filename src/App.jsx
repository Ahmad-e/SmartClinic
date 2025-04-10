import 'bootstrap/dist/css/bootstrap.min.css';
import "./guest/style.css";

import './App.css';
import './component/style.css'

import NavBar from './component/navbar/header';
import Footer from './component/footer';
import LandingPage from './guest/landing/home';
import Register from './guest/register';
import Signin from './guest/login';
// import AboutUs from './users/aboutUs';

import AdminApp from './admin/App';
import AdminHome from './admin/home';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  ConfigProvider , theme } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {modeActions} from "./store";


import "@fontsource/cairo"; 
import "@fontsource/cairo/400.css";





function App() {

  const darkTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Cairo',
        textTransform: 'none',
        fontSize: 15,
      },
    },
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Cairo',
        textTransform: 'none',
        fontSize: 16,
      },
    },
    
    palette: {
      mode: 'light',
    },
  });
  const mode = useSelector((state) => state.mode);
  const language = useSelector((state) => state.language);


  return (
    <ThemeProvider theme={ mode==="dark" ? darkTheme : lightTheme}>
      <ConfigProvider
        theme={{
          algorithm: mode==="dark" ? theme.darkAlgorithm : theme.compactAlgorithm
        }}
      >
      <div dir={language==="Ar" ? ("rtl") :("ltr") }  className={"text-lg App "+mode+"  "+language }>
        <BrowserRouter>
        <NavBar />
        <div className='padding-top'>
          <Routes>
            <Route>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />

              
              <Route path="admin" element={<AdminApp />} >
                <Route path="" element={<AdminHome />} />
                
              </Route>

              
            </Route>
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;

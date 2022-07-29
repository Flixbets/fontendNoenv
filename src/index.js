import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header_user from './components/user/Header_user';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import frFR from 'antd/es/locale/th_TH';
import Alladmin from './components/admin_components/Alladmin';
import Alluser from './components/user/Alluser';


import Entersite from './components/user/Entersite';
import Userlogin from './components/user/Userlogin';
import Infouser from './components/user/Infouser';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={frFR}>
      <BrowserRouter>
        <Routes>

          <Route path="/admin/*" element={<App />} >
          
          </Route>
          <Route path="/*" element={<Alluser />} ></Route>
          <Route path="/admin/*" element={<Alladmin />} ></Route>
          {/* <Route path="/admin/*" element={<Alladmin />} ></Route> */}
          <Route path="/*" element={<Header />} ></Route>
          
         
          
          {/* <Route path="/addUser" element={<Adduser />} ></Route> */}



          <Route path="/" element={<Entersite />} ></Route>
          <Route path="/th" element={<Header_user />} ></Route>

          <Route path="/login" element={<Userlogin />} ></Route>
          <Route path="/user_information" element={<Infouser />} ></Route>

        </Routes>
      </BrowserRouter>
    </ConfigProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

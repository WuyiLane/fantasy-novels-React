import React from 'react';
import './styles/base.css';
import GuidePage from "./components/Guide/GuidePage";
import {HashRouter, Route, Routes} from 'react-router-dom'
import LoginPage from "./components/Login";
function App() {
  return (
      // hash  里面加载路由 #/login  前端使用的
      <HashRouter>
          <Routes>
              <Route path='/' element={<GuidePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
          </Routes>
      </HashRouter>
  );
}

export default App;

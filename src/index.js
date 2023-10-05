import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import './styles/bootstrap-overide.css';

import Home from './pages/Home';
import Menu from './components/Menu';
import Certificados from './pages/Certificados';
import AprovacaoCertificados from './pages/AprovacaoCertificados';
import Sobre from './pages/Sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Menu/>
      <main style={{ marginLeft: "15em", padding: "0 5%"}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/certificados' element={<Certificados/>}/>
            <Route path='/admin/certificados' element={<AprovacaoCertificados/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
          </Routes>
        </BrowserRouter>
      </main>
  </React.StrictMode>
);

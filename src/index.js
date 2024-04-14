import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './Pages/404';
import Footer from './Composants/footer';
import Home from './Pages/home';
import Logement from './Pages/logement';
import Propos from './Pages/propos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/Logement/:Id' element={<Logement />} />
        <Route path='/A_Propos' element={<Propos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
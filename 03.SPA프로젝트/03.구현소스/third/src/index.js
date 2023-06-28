import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import './index.css';
import Canyon from './Fila/Canyon';
import Woods from './Fila/Woods';
import Elements from './Fila/Elements';
import Mountain from './Fila/Mountain';
import Main from './Fila/Main';
import Layout from './Fila/Layout';
import ScrollTop from './Fila/common/ScrollTop';


export default function App(){
  return(
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    // <BrowserRouter>
    <HashRouter>
    <ScrollTop /> 
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='canyon' element={<Canyon />} />
        <Route path='mountain' element={<Mountain />} />
        <Route path='woods' element={<Woods />} />
        <Route path='elements' element={<Elements />} />
      </Route>
    </Routes>
    {/* </BrowserRouter> */}
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
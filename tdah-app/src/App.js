import React from 'react';
import Header from './componentes/Header/header';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Footer from './componentes/Footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componentes/Pages/Login';
import Home from './componentes/Pages/home';
import TDAH from './componentes/Pages/tdah';
import Cadastro from './componentes/Pages/cadastro';
import Contato from './componentes/Pages/contato';
import Focus from './componentes/Pages/focus';


const Body = styled.body`
color: #18A4C3;
background-color: #f5f5f5;
min-width:700px;
min-height:250px;
max-width: 1920px;
height:auto;
margin:0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'SuaFonte', sans-serif; /* Substitua 'SuaFonte' pelo nome da fonte */
  }
`;

function App() {
  return (
      <Body>
        <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<div><Header /><Login/><Footer /></div>} />
              <Route path='/Home' element={<div><Header /><Home/><Footer /></div>} />
              <Route path='/Login' element={<div><Header /><Login/><Footer /></div>} />
              <Route path='/Cadastro' element={<div><Header /><Cadastro/><Footer /></div>} />
              <Route path='/TDAH' element={<div><Header /><TDAH/><Footer /></div>} />
              <Route path='/Foco' element={<div><Header /><Focus/><Footer /></div>} />
              <Route path='/Contato' element={<div><Header /><Contato/><Footer /></div>} />
            </Routes>
          </BrowserRouter>
        
      </Body>
  );
}

export default App;

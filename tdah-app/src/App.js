import React from 'react';
import Header from './componentes/Header/header';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Footer from './componentes/Footer/footer';


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
        <Header/>
        <GlobalStyle/>
        <Footer/>
      </Body>
  );
}

export default App;

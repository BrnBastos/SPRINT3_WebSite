import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/image';
import { Link } from 'react-router-dom';

const OpcoesUl = styled.ul`
    font-size: 21px;
    display: flex;
    justify-content: right;
    text-align: center;
    padding: 0 10px;
    font-weight: 400;
    width:100%;
`
const TitleUl = styled.p`
    font-size: 28px;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    width:30%;
`
const Opcoesli = styled.li`
    padding: 0 3vw;
    list-style: none;
    
`
const CursorP = styled.p`
    cursor: pointer;
    margin:0;
`
const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:0 auto;
`
const StyledLink = styled(Link)`
  text-decoration: none; /* Remova o sublinhado */
  color: inherit; /* Herde a cor do texto do elemento pai */
  /* Adicione outros estilos desejados aqui */
`;

const navOptions = ['Home', 'TDAH', 'Contato', 'Foco', 'Login']

function NavHeader(){
    return(
        <FlexDiv>
        <TitleUl>
           
            <CursorP> <Logo/>COMPANY-NAME</CursorP>
        </TitleUl>
        <OpcoesUl className='opcoes' list-style="none">
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Home">Home</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/TDAH">TDAH</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Contato">Contato</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Foco">Foco</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Login">Login</StyledLink></CursorP></Opcoesli>
        </OpcoesUl>
        </FlexDiv>
    )
}

export default NavHeader
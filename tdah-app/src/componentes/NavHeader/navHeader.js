import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/image';

const OpcoesUl = styled.ul`
    font-size: 21px;
    display: flex;
    justify-content: center;
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
    margin-right: 10vw;
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

const navOptions = ['Home', 'TDAH', 'Contato', 'Sobre Nós', 'Login']

function NavHeader(){
    return(
        <FlexDiv>
        <TitleUl>
           
            <CursorP> <Logo/>COMPANY-NAME</CursorP>
        </TitleUl>
        <OpcoesUl className='opcoes' list-style="none">
          {navOptions.map ((texto) =>(
            <Opcoesli className='opcao' display="inline-block"><CursorP>{texto}</CursorP></Opcoesli>
          ))}
        </OpcoesUl>
        </FlexDiv>
    )
}

export default NavHeader
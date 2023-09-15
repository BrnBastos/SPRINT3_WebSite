import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/image';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const ButtonSair = styled.button`
    width: auto;
    height: auto;
    border-radius: 5px;
    border-color: #18A4C3;

    &:hover{
        background-color:#18A4C3;
        color:white;
    }
`

const navOptions = ['Home', 'TDAH', 'Contato', 'Foco', 'Login']


function NavHeader(){

    const [usuarioAutenticado, setUsuarioAutenticado] = useState(JSON.parse(localStorage.getItem('usuario')));
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpar o LocalStorage e redirecionar para a página de login
        localStorage.removeItem('usuario');
        setUsuarioAutenticado(null);
        navigate('/login');
      };

    return(
        <FlexDiv>
        <TitleUl>
           
            <CursorP> <Logo/>TDAH-Connect</CursorP>
        </TitleUl>
        <OpcoesUl className='opcoes' list-style="none">
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Home">Home</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/TDAH">TDAH</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Contato">Contato</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Foco">Foco</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Login">{usuarioAutenticado && (
        <ButtonSair onClick={handleLogout}>Sair</ButtonSair>
      )}</StyledLink></CursorP></Opcoesli>
        </OpcoesUl>
        </FlexDiv>
    )
}

export default NavHeader
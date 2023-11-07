import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/image';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const OpcoesUl = styled.ul`
    font-size: 21px;
    display: flex;
    justify-content: right;
    text-align: center;
    padding: 0 10px;
    font-weight: 400;
    width:100%;
    margin: 0 auto;
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
    @media (max-width: 768px) {
        display: none;
    }
`

const DropDownBotao = styled.li`
    list-style: none;
    @media (min-width: 768px) {
        display: none;
    }
`

const BotoesDropDown = styled.div`
    width: 100%;
    height: 100%;
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
  text-decoration: none;
  color: inherit;
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
           
            <CursorP><StyledLink to="/Home"><Logo/>TDAH-Connect</StyledLink></CursorP>
        </TitleUl>
        <OpcoesUl className='opcoes' list-style="none">
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Home">Home</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/TDAH">TDAH</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Contato">Contato</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Foco">Foco</StyledLink></CursorP></Opcoesli>
            <Opcoesli display="inline-block"><CursorP><StyledLink to="/Login">{usuarioAutenticado && (
        <ButtonSair onClick={handleLogout}>Sair</ButtonSair>
      )}</StyledLink></CursorP></Opcoesli>
            <DropDownBotao display="inline-block">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                        backgroundColor: '#18A4C3',
                        borderColor: '#0f6b80'
                        }}>
                        Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><StyledLink to="/Home"><BotoesDropDown>Home</BotoesDropDown></StyledLink></Dropdown.Item>
                        <Dropdown.Item><StyledLink to="/TDAH"><BotoesDropDown>TDAH</BotoesDropDown></StyledLink></Dropdown.Item>
                        <Dropdown.Item><StyledLink to="/Contato"><BotoesDropDown>Contato</BotoesDropDown></StyledLink></Dropdown.Item>
                        <Dropdown.Item><StyledLink to="/Foco"><BotoesDropDown> Foco</BotoesDropDown></StyledLink></Dropdown.Item>
                        <StyledLink to="/Login" style={{padding:'0px 0px 0px 10px'}}>{usuarioAutenticado && (
                            <ButtonSair onClick={handleLogout}>Sair</ButtonSair>
                        )}</StyledLink>
                    </Dropdown.Menu>
                </Dropdown>
            </DropDownBotao>
        </OpcoesUl>
        </FlexDiv>
    )
}

export default NavHeader
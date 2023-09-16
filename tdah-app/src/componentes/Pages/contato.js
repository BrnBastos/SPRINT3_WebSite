import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutImage from '../Images/image3';

function Contato() {

    const navigate = useNavigate();

     useEffect(() => {
    // Verificar a autenticação aqui (por exemplo, verificar se o usuário está no LocalStorage)
    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuario'));

    if (!usuarioAutenticado) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate('/Login');
    }
  }, [navigate]);

    const SecAbout = styled.section`
        width:65%;
        margin:0 auto;
        height: auto;
        display: flex;
        margin-right: 15vw;
    `
    const DivTextAbout = styled.div`
        width:40%;
        margin:0 auto;
        display: inline-block;
        align-items: center;
        text-align: left;
        color: #777777;
    `
    const Title = styled.h2`
        font-weight: 600;
        align-items: center;
        text-align: left;
        color: #18A4C3;
        font-size:35px;
    `
    const TitleC = styled.h2`
        font-weight: 600;
        align-items: center;
        text-align: center;
        color: #18A4C3;
        font-size:35px;
    `

    const DivSpace = styled.div` 
        width: 100%;
        height: 30px;
    `

    const SecContato = styled.section`
        width:85%;
        margin:0 auto;
        height: auto;
    `

    return (
        <div>
            <DivSpace/><DivSpace/><DivSpace/>
            <SecAbout>
                <DivTextAbout>
                    <Title>Quem Somos</Title>
                    <p>
                    O TDAH-Connect é um projeto realizado pelos alunos da FIAP em conjunto à IBM, voltado ao tema de cidades sustentáveis. Criamos este projeto para assegurar uma melhora na qualidade de vida de todos os usuários em quesitos de saúde e conhecimento. Nosso site não é restrito apenas aos cidadãos com o transtorno, ele também é destinado a outros públicos que buscam se informar e aprimorar seu intelecto sobre o assunto. Com isso, esperamos que com todas as ferramentas contidas, as dificuldades diárias durante a execução de tarefas sejam reduzidas e suas performances melhoradas. 
                        
                    </p>
                    <br/>
                    <p>
                        O intuito prioritário do projeto é que sirva de pilar ao aprendizado e conhecimento, fluindo-se totalmente contra os preconceitos e estigmas remanescentes, que ainda atingem e assolam uma parte muito considerável da população brasileira. Quanto maior visibilidade sobre nossas iniciativas, maior o número de tratamentos precoces e cada vez menos impasses sociais negativos.​
                    </p>
                </DivTextAbout>
                <div>
                    <AboutImage/>
                </div>
            </SecAbout>

            <DivSpace/><DivSpace/>

            <TitleC>Contate-Nos</TitleC>
            <SecContato>
            <h3> Desenvolvedores:</h3>
            <h4> Bruno Silva Bastos  -- brunosbastos5@gmail.com</h4>
            <h4> Gabriel Freitas -- gabrielmaradei2017@gmail.com</h4>
            <h4> Guilherme Daher -- guidaher2004@gmail.com</h4>
            <h4> Matheus Lucas -- matheus.lob1379@gmail.com</h4>
            <h4> Número para contato -  55 1198952-5531</h4>
            </SecContato>
        </div>
    );
  }
  
  export default Contato;
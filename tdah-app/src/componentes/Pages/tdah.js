import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TdahImage from '../Images/image2';

const TextTdah = styled.h1`
    color: #1B1B1B;
    text-align: left;
    align-items: left;
    font-weight: 10;
    margin-left: 20vw;
`

const SecContainer = styled.section`
    display: flex;
    margin:0 auto;
    width: 100%;
    max-width: 1920px;
`

const DivTopics1 = styled.div`
    display: inline-block;
    margin:0 0 0 7vw;
    width:30%;
`

const DivTopics2 = styled.div`
    display: inline-block;
    margin:0 auto;
`

const DivInline = styled.div`
    display: inline-flex;
    margin:0;
    text-align: center;
    align-items: center;
`
const ColorBlack = styled.h3`
    color:black;
    font-weight: 500;
`
const DivSpace = styled.div`
    width:100%;
    height: 30px;
`

function TDAH() {

    const navigate = useNavigate();

     useEffect(() => {
    // Verificar a autenticação aqui (por exemplo, verificar se o usuário está no LocalStorage)
    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuario'));

    if (!usuarioAutenticado) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate('/Login');
    }
  }, [navigate]);

    return (
        <div>
            <DivSpace/><DivSpace/>
            <TextTdah>Entendendo o TDAH</TextTdah>
            <DivSpace/>
            <SecContainer>
                <DivTopics1>
                    <div>
                        <DivInline><h3>01.</h3><ColorBlack>Hiperatividade</ColorBlack></DivInline>
                        <p>
                            Proin ipsum sed tincidunt ultricies a vitae aliquam quam. Malesuada hac viverra diam vitae. Aliquam, nec vitae vitae mi, mattis orci et leo. Hendrerit nisl metus orci enim. Sed.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>02.</h3><ColorBlack>Desvio de atenção</ColorBlack></DivInline>
                        <p>
                            Proin ipsum sed tincidunt ultricies a vitae aliquam quam. Malesuada hac viverra diam vitae. Aliquam, nec vitae vitae mi, mattis orci et leo. Hendrerit nisl metus orci enim. Sed.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>03.</h3><ColorBlack>Hiperfoco</ColorBlack></DivInline>
                        <p>
                            Proin ipsum sed tincidunt ultricies a vitae aliquam quam. Malesuada hac viverra diam vitae. Aliquam, nec vitae vitae mi, mattis orci et leo. Hendrerit nisl metus orci enim. Sed.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>04.</h3><ColorBlack>Inquietação</ColorBlack></DivInline>
                        <p>
                            Proin ipsum sed tincidunt ultricies a vitae aliquam quam. Malesuada hac viverra diam vitae. Aliquam, nec vitae vitae mi, mattis orci et leo. Hendrerit nisl metus orci enim. Sed.
                        </p>
                    </div>
                </DivTopics1>
                <DivTopics2>
                    <TdahImage/>
                </DivTopics2>
            </SecContainer>
            <DivSpace/><DivSpace/><DivSpace/><DivSpace/>
            
        </div>
    );
  }
  
   export default TDAH;
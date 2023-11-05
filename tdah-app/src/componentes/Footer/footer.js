import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    color: black;
    display: flex;
    background-color:#FFF;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0;
    height: 12vh;
    width:100%;
`

const FlexDivF = styled.footer`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`
const PaddingF = styled.h4`
    display: flex;
    padding:0 6vw;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 20px;
`

function Footer(){
    return(
        <FooterStyle>
            <FlexDivF>
                <PaddingF>
                    © 2023 TDAH-Connect - Todos os direitos reservados
                </PaddingF>
                <PaddingF>
                    Desenvolvido por alunos da FIAP
                </PaddingF>
            </FlexDivF>
        </FooterStyle>
 );
}

export default Footer
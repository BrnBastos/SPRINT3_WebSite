import React from 'react';
import Logo from '../Images/image';
import styled from 'styled-components';

const CursorP = styled.p`
    cursor: pointer;
    margin:0;
`

const TitleUl = styled.p`
    font-size: 28px;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    padding: 10px 0px 0px 10px;
`

function HeaderSemNav(){
    return(
        <header className='headerPag'>
            <TitleUl><CursorP><Logo/>TDAH-Connect</CursorP></TitleUl>
        </header>
 );
}

export default HeaderSemNav
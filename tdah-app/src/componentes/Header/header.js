import React from 'react';
import NavHeader from '../NavHeader/navHeader';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  background-color: #FFF;
`

function Header(){
    return(
        <HeaderStyle>
            <NavHeader/>
        </HeaderStyle>
 );
}

export default Header
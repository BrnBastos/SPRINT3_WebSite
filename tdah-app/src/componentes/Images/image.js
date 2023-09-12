import React from 'react';
import styled from 'styled-components';
import iconHeader from '../../img/iconHeader.png'

const ImageStyleIcon = styled.img`
    height:70px;
    width:70px;
`

function Logo(){
    return(
        <div className='logo'>
            <ImageStyleIcon
              src={iconHeader}
              alt='logo'  
            ></ImageStyleIcon>
        </div>
    );
}

export default Logo
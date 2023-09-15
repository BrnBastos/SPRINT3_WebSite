import group3 from '../../img/group3.png'
import styled from 'styled-components';

const ImageTdah = styled.img`
    width: 750px;
    height: 685px;
`

function TdahImage(){
    return(
        <div className='tdahImage'>
            <ImageTdah
              src={group3}
              alt='tdahImage'  
            ></ImageTdah>
        </div>
    );
}

export default TdahImage;
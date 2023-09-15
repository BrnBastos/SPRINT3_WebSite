import About from '../../img/About.png'
import styled from 'styled-components';

const ImageAbout = styled.img`
   width: 80%;
`

function AboutImage(){
    return(
        <div className='aboutImage'>
            <ImageAbout
              src={About}
              alt='aboutImage'
            ></ImageAbout>
        </div>
    );
}

export default AboutImage;
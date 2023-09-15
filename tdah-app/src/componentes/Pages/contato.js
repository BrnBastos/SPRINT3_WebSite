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
        margin-right: 20vw;
    `
    const DivTextAbout = styled.div`
        width:30%;
        margin:0 auto;
        display: inline-block;
        align-items: center;
        text-align: left;
        color: #777777;
    `
    const TitleAbout = styled.h2`
        font-weight: 600;
        align-items: center;
        text-align: left;
        color: #18A4C3;
        font-size:35px;
    `

    const DivSpace = styled.div` 
        width: 100%;
        height: 30px;
    `

    return (
        <div>
            <DivSpace/><DivSpace/><DivSpace/>
            <SecAbout>
                <DivTextAbout>
                    <TitleAbout>Quem Somos</TitleAbout>
                    <p>
                        Quis at consequat, vitae sed integer dis. Cursus elementum purus velit integer integer id. Vel consequat egestas aliquam vitae diam sapien dolor habitant ipsum. Cursus in in volutpat at amet nulla ultrices. Consequat tristique egestas ultricies vel, ut viverra. Justo, interdum posuere ut lorem sit pharetra, vitae lobortis. Duis morbi id aliquam semper sapien. Lorem vestibulum a ut ut laoreet iaculis quis cursus.
                        
                    </p>
                    <br/>
                    <p>
                        Phasellus consequat mollis sed nulla morbi pharetra. Arcu nam amet commodo ut tortor, aliquam est. Ut sit habitant morbi consectetur non tristique accumsan malesuada volutpat. Nulla sit eu lobortis arcu egestas faucibus. Elementum tincidunt nulla aliquet maecenas ut diam egestas leo euismod. Quam viverra egestas dolor et at tempus ut diam. Molestie neque enim sed iaculis suspendisse cursus sit sem eget. Orci erat amet scelerisque tortor nam mauris nisl pulvinar. Sit massa consequat, sed quam.
                    </p>
                </DivTextAbout>
                <div>
                    <AboutImage/>
                </div>
            </SecAbout>
        </div>
    );
  }
  
  export default Contato;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

// Seção Carrosel
const data = [
  {
   image: require('../../img/TDAH-SITE-scaled.jpg'), 
  },
  {
    image:require('../../img/maxresdefault.jpg'), 
   },
   {
    image:require('../../img/Tipos_TDAH-1.png'), 
   } 
]
// Fim seção carrosel
function Home() {
  const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(JSON.parse(localStorage.getItem('usuario')));

  useEffect(() => {
    // Verificar a autenticação aqui (por exemplo, verificar se o usuário está no LocalStorage)
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    setUsuarioAutenticado(usuario);

    if (!usuario) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpar o LocalStorage e redirecionar para a página de login
    localStorage.removeItem('usuario');
    setUsuarioAutenticado(null);
    navigate('/login');
  };

  return (
    <><center>
      <h1 className='bemVindo'>Bem-vindo à página inicial {usuarioSalvo.nome}!</h1>
      <p>Você está logado com sucesso.</p>
      <p>Sinta-se livre para acessar nosso conteúdo</p>
      <p>no menu acima!</p>

      <div className='divCarrosel'>
        <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
          {data.map((slide, i) => {
            return (
              <Carousel.Item>        
            <img
              className="tamanhoImgCarrosel"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
            )
          })}
          
        </Carousel>
      </div>
    </center></>
    
  );
}

export default Home;
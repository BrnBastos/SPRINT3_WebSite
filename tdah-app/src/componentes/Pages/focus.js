import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Focus() {

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
            <h1>Login Page</h1>
            {/* Adicione um botão que redireciona para a página de login */}
            <Link to="/Home">
                <button>Ir para a página Focus</button>
            </Link>
        </div>
    );
  }
  
  export default Focus;
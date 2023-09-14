import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
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
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      {usuarioAutenticado && (
        <button onClick={handleLogout}>Sair</button>
      )}
      <p>Você está logado com sucesso.</p>
    </div>
  );
}

export default Home;
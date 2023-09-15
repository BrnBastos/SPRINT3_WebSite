import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    // Obter os dados do usuário do LocalStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    // Verificar se o usuário e senha coincidem
    if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
      // Redirecionar para a página de home
      window.location.href = '/home';
    } else {
      setErro('Email ou senha incorretos. Por favor, tente novamente.');
    }
  };

  return (
    <div>
     <center>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p>{erro}</p>}
      <p>
        Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
      </center>
    </div>
  );
}

export default Login;


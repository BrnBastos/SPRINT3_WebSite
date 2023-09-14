import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode realizar a validação dos dados, como garantir que os campos não estão vazios
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Salvar os dados no LocalStorage
    const usuario = { nome, email, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionar para a página de login
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
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
      <button onClick={handleCadastro}>Cadastrar</button>
      <p>
        Já possui uma conta? <Link to="/login">Faça o login</Link>
      </p>
    </div>
  );
}

export default Cadastro;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

const Title = styled.h1`
  color: #18A4C3;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
    border-radius: 10px;
    border: 1.5px solid #f5f5f5;
    width: 422px;
    height: 50px;

    &:hover{
      border: 1.5px solid #18A4C3;
    }

    &:focus {
    outline: none;
    border-color: #18A4C3;
    }
`

const LoginButton = styled.button`
  border-radius: 10px;
    background-color: #FFF;
    border: 1.5px solid #18A4C3;
    width: 90px;
    height: 50px;
    cursor: pointer;
    color: #777;

    &:hover{
      border: 1.5px solid #18A4C3;
      background-color: #18A4C3;
      color: #f5f5f5;
    }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const SignUpLink = styled.p`
  color: #18A4C3;
  margin-top: 20px;

  a {
    color: #18A4C3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DivSpace = styled.div`
  width: auto;
  height:15px;
`

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
    <LoginContainer>
        <Title>Login</Title>
        <DivSpace/>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <DivSpace/>
        <InputField
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <DivSpace/>
        <LoginButton onClick={handleLogin}>Entrar</LoginButton>
        {erro && <ErrorMessage>{erro}</ErrorMessage>}
        <SignUpLink>
          <span className='paragrafoCinza'>Não possui uma conta?</span> <Link to="/cadastro">Cadastre-se</Link>
        </SignUpLink>
    </LoginContainer>
  );
}

export default Login;
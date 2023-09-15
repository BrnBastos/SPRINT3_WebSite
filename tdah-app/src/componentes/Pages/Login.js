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

const LoginForm = styled.div`
  background-color: #ffffffa2;
  padding: 30px;
  box-shadow: 3px 3px 1px 0px #00000060;
  border-radius: 10px;
  text-align: center;
  width: 20vw;
`;

const Title = styled.h1`
  color: #18A4C3;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid #18A4C3;
  color: #18A4C3;

  &::placeholder {
    color: #18A4C3;
  }
`;

const LoginButton = styled.button`
  background-color: #18A4C3;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #127c8e;
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
      <LoginForm>
        <Title>Login</Title>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>Entrar</LoginButton>
        {erro && <ErrorMessage>{erro}</ErrorMessage>}
        <SignUpLink>
          Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </SignUpLink>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
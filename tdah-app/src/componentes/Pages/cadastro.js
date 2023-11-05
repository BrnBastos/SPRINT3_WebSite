import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Cadastro() {
  const handleCadastro = () => {
    // Obter os valores dos campos diretamente dos elementos HTML
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

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

  const InputC = styled.input`
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
  const BtnCadastro = styled.button` 
    border-radius: 10px;
    background-color: #FFF;
    border: 1.5px solid #18A4C3;
    width: auto;
    height: 50px;
    cursor: pointer;
    color: #777;

    &:hover{
      border: 1.5px solid #18A4C3;
      background-color: #18A4C3;
      color: #f5f5f5;
    }
  `
  const DivInline = styled.div`
    display: block;
    width:450px;
    padding: 100px 0px;
  `
  const DiviSpace = styled.div`
    width:auto;
    height:15px;
  `

  return (
    <div>
      <center>
        <DivInline>
          <h1>Cadastro</h1>
          <DiviSpace/>
          <InputC
            id="nome"
            type="text"
            placeholder="Nome"
          />
          <DiviSpace/>
          <InputC
            id="email"
            type="email"
            placeholder="Email"
          />
          <DiviSpace/>
          <InputC
            id="senha"
            type="password"
            placeholder="Senha"
          />
          <DiviSpace/>
          <BtnCadastro onClick={handleCadastro}>Cadastrar</BtnCadastro>
          <DiviSpace/>
          <p>
            <span className='paragrafoCinza'>Já possui uma conta?</span> <Link to="/login">Faça o login</Link>
          </p>
        </DivInline>
      </center>
    </div>
  );
}

export default Cadastro;

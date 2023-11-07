import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TdahImage from '../Images/image2';

const TextTdah = styled.h1`
    color: #1B1B1B;
    text-align: left;
    align-items: left;
    font-weight: 10;
    margin-left: 20vw;
`

const SecContainer = styled.section`
    display: flex;
    margin:0 auto;
    width: 100%;
    max-width: 1920px;
`

const DivTopics1 = styled.div`
    display: inline-block;
    margin:0 0 0 7vw;
    width:30%;
`

const DivTopics2 = styled.div`
    display: inline-block;
    margin:auto;
    margin-top: 100px;
`

const DivInline = styled.div`
    display: inline-flex;
    margin:0;
    text-align: center;
    align-items: center;
`
const ColorBlack = styled.h3`
    color:black;
    font-weight: 500;
`
const DivSpace = styled.div`
    width:100%;
    height: 30px;
`

function TDAH() {

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
            <DivSpace/><DivSpace/>
            <TextTdah>Sintomas do TDAH</TextTdah>
            <DivSpace/>
            <SecContainer>
                <DivTopics1>
                    <div>
                        <DivInline><h3>01.</h3><ColorBlack>Hiperatividade</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        A hiperatividade é um dos principais sintomas do TDAH. Ela se manifesta em crianças e adultos como um excesso de movimento, agitação e inquietação. Pessoas com TDAH podem ter dificuldade em ficar paradas, frequentemente se levantando da cadeira, mexendo as mãos ou os pés e interrompendo outras pessoas. Essa agitação pode tornar desafiador o envolvimento em atividades que exigem tranquilidade, como sentar-se em uma sala de aula ou participar de reuniões.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>02.</h3><ColorBlack>Desvio de atenção</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        O desvio de atenção é outro sintoma fundamental do TDAH. Isso se traduz em dificuldade em manter o foco em tarefas ou atividades por períodos prolongados. Pessoas com TDAH podem facilmente ser distraídas por estímulos externos, pensamentos intrusivos ou outros estímulos sensoriais. Isso pode afetar a capacidade de completar tarefas escolares, no trabalho ou em casa, e pode levar à procrastinação.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>03.</h3><ColorBlack>Hiperfoco</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        Embora a falta de atenção seja um sintoma, algumas pessoas com TDAH também experimentam o fenômeno do hiperfoco. Isso ocorre quando uma pessoa com TDAH se concentra intensamente em uma atividade ou tarefa específica que é altamente interessante ou estimulante. Durante o hiperfoco, a pessoa pode dedicar horas a essa atividade, muitas vezes ignorando outras responsabilidades ou compromissos. Embora o hiperfoco possa ser produtivo, ele também pode ser prejudicial se levar ao descuido de outras áreas da vida.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>04.</h3><ColorBlack>Inquietação</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        A inquietação é um sintoma frequentemente associado à hiperatividade no TDAH. Ela se manifesta como uma sensação constante de inquietude física e mental. As pessoas com TDAH podem sentir a necessidade de estar sempre em movimento, mudando de posição frequentemente e incapazes de relaxar completamente. A inquietação pode causar desconforto e dificultar a concentração em tarefas que exigem tranquilidade.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>05.</h3><ColorBlack>Impulsividade</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        A Impulsividade é sinônimo de dificuldade com autocontrole sendo bastante frequente encontrar pessoas agindo e se arrependendo posteriormente. Pois, mesmo tendo consciência do que é certo ou errado, adequado ou inconveniente, ainda assim agem de forma oposta ao que pensam.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3>06.</h3><ColorBlack>Desenvolvimento de outros transtornos e condições</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        Pessoas com TDAH têm maior probabilidade de desenvolver outras doenças e condições, incluindo ansiedade, depressão, transtorno obsessivo-compulsivo (TOC) e até abuso de substâncias. O mais comum deles é o transtorno desafiador de oposição (TDO), que está presente em até 41% dos casos de TDAH.
                        </p>
                    </div>
                </DivTopics1>
                <DivTopics2>
                    <TdahImage/>
                </DivTopics2>
            </SecContainer>
            <DivSpace/><DivSpace/><DivSpace/><DivSpace/>
            
        </div>
    );
  }
  
   export default TDAH;
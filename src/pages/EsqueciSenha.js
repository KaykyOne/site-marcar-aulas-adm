import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonBack from '../components/ButtonBack';
import { useNavigate } from 'react-router-dom';

import ImgCadeado from '../imgs/imgCadeado.png';

export default function EsqueciSenha() {
  const navigate = useNavigate();

  return (
    <div className='container vw-100'>
      <div className='container-vertical'>
        <img className='iconeSimples' src={ImgCadeado}/>
        <div>
          <h1>Esqueceu sua senha?</h1>
          <p>Digite seu CPF e cuidamos do resto!😉 <br />
            <strong>Você vai receber sua nova senha por whatsapp!</strong>
          </p>
        </div>
        <Input
          placeholder={"CPF"} />
        <Button children={"Enviar Senha"} icon={"arrow_right_alt"} />
        <ButtonBack children={"Voltar para o Login!"} onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

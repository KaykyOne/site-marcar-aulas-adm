import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

//Imgs
import LogoNovusCFC from '../imgs/logoNovusCFC.png';
import ImagemLogin from '../imgs/imagemLogin.png';

export default function Login() {
  const navigate = useNavigate();
  const [iconSenha, setIconSenha] = useState('visibility');
  const [loading, setLoading] = useState(false);

  const mudarIconSenha = () => {
    if (iconSenha == 'visibility') {
      setIconSenha('visibility_off');
    } else {
      setIconSenha('visibility');
    }
  }

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <div className='container vw-100'>
      <div className='container-fluid max-1200'>
        <div className='container-vertical'>
          <img className='logo' src={LogoNovusCFC} />
          <div>
            <h1>Faça seu Login!😁</h1>
            <p>Você está na parte Administrativa!</p>
          </div>
          <Input placeholder={"CPF"} />
          <div className='container-password'>
            <Input typeForInput={iconSenha == 'visibility' ? 'password' : 'text'} placeholder={"Senha"} />
            <Button onClick={mudarIconSenha} icon={iconSenha}></Button>
          </div>
          <CheckBox children={"Salvar Login"} />
          <Button onClick={() => navigate('Home')} icon={'login'}>Entrar</Button>
          <a onClick={() => navigate('EsqueciSenha')} className='link'>Esqueceu a Senha? Clique aqui!</a>
        </div>

        <img className='imagem-login' src={ImagemLogin} />
      </div>
      {loading ? <Loading /> : ''}
    </div>

  )
}

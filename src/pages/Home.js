import React, { useState } from "react";
import Loading from '../components/Loading';
import Button from "../components/Button";
import Menu from '../components/Menu'

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className='container vw-100'>
      <div className='container-fluid max-1200'>
        <div className='container-vertical'>
          <Menu />
        </div>
        <div className='container-vertical'>
          <div>
            <h1>Bem-Vindo</h1>
            <h3>Aqui vc vai poder gerenciar o app da sua autoescola!😉</h3>
          </div>
        </div>
      </div>
      {loading ? <Loading /> : ''}
    </div>

  );
}

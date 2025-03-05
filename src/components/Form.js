import React from 'react';
import Input from './Input';
import Button from './Button';
import RadioButton from './RadioButton';

export default function Fomr({ type }) {
  return (
    <div className='container-vertical'>
      <h1 className='form-title'>Cadastro de {type == 'aluno' ? "Alunos" : "Instrutor"}</h1>
      <div>
        <h3 className='form-label'>Nome:</h3>
        <Input className='form-input-field' placeholder='Nome' />
        <h3 className='form-label'>Sobrenome:</h3>
        <Input className='form-input-field' placeholder='Sobrenome' />
        <h3 className='form-label'>CPF:</h3>
        <Input className='form-input-field' placeholder='CPF' />
        <h3 className='form-label'>Telefone:</h3>
        <Input className='form-input-field' placeholder='Telefone' />
        <h3 className='form-label'>Categoria Pretendida:</h3>
        <div className='form-radio-group'>
          <RadioButton id="A" name="categoria" value="A" text="A" />
          <RadioButton id="B" name="categoria" value="B" text="B" />
          <RadioButton id="C" name="categoria" value="C" text="C" />
          <RadioButton id="D" name="categoria" value="D" text="D" />
          <RadioButton id="E" name="categoria" value="E" text="E" />
        </div>  
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>





      <div className="form-input-button">
        <Button children={'Cadastrar'} />
      </div>

    </div>
  )
}

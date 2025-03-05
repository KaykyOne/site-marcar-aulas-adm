import React, { useState } from 'react';
import Button from '../components/Button';
import Menu from '../components/Menu';
import Modal from '../components/Modal';
import ListGridToggle from '../components/ListGrid';
import Form from '../components/Form'

export default function Aluno() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { field: "ID", headerName: "ID", width: 50 },
    { field: "Nome", headerName: "Nome", width: 150 },
    { field: "Sobrenome", headerName: "Sobrenome", width: 150 },
    { field: "Telefone", headerName: "Telefone", width: 100 },
  ];

  const rows = [
    { ID: 1, Nome: "João", Sobrenome: "Silva", Telefone: "123456789" },
    { ID: 2, Nome: "Maria", Sobrenome: "Oliveira", Telefone: "987654321" },
    { ID: 3, Nome: "Carlos", Sobrenome: "Pereira", Telefone: "567890123" },
    { ID: 4, Nome: "Ana", Sobrenome: "Costa", Telefone: "678901234" },
    { ID: 5, Nome: "Lucas", Sobrenome: "Santos", Telefone: "345678901" },
    { ID: 6, Nome: "Fernanda", Sobrenome: "Alves", Telefone: "234567890" },
    { ID: 7, Nome: "Ricardo", Sobrenome: "Lima", Telefone: "123123123" },
    { ID: 8, Nome: "Patrícia", Sobrenome: "Martins", Telefone: "456456456" },
    { ID: 9, Nome: "Gabriel", Sobrenome: "Barros", Telefone: "789789789" },
    { ID: 10, Nome: "Juliana", Sobrenome: "Souza", Telefone: "321321321" },
    { ID: 11, Nome: "Thiago", Sobrenome: "Mendes", Telefone: "654654654" },
    { ID: 12, Nome: "Mariana", Sobrenome: "Ferreira", Telefone: "567567567" },
    { ID: 13, Nome: "Ricardo", Sobrenome: "Gomes", Telefone: "987987987" },
    { ID: 14, Nome: "Juliana", Sobrenome: "Castro", Telefone: "543543543" },
    { ID: 15, Nome: "Eduardo", Sobrenome: "Rocha", Telefone: "876876876" },
    { ID: 16, Nome: "Roberta", Sobrenome: "Pinto", Telefone: "678678678" },
    { ID: 17, Nome: "Bruna", Sobrenome: "Nogueira", Telefone: "432432432" },
    { ID: 18, Nome: "Leandro", Sobrenome: "Cavalcanti", Telefone: "234234234" },
    { ID: 19, Nome: "Fernanda", Sobrenome: "Dias", Telefone: "987987987" },
    { ID: 20, Nome: "Sérgio", Sobrenome: "Teixeira", Telefone: "321321321" }
  ];


  return (
    <div className='container vw-100'>
      <div className='container-fluid max-1200'>
        <div className='container-vertical'>
          <Menu />
        </div>

        <div className='container-vertical'>
          <div className='container-horizontal-end '>
            <Button icon={"add"} children={"Cadastrar Aluno"} onClick={() => setIsModalVisible(true)} />

          </div>

          <div>
            <h3>Listar Alunos</h3>
            <ListGridToggle columns={columns} rows={rows} />
          </div>

        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}>
        <Form type={"aluno"} />
      </Modal>

    </div>
  );
}

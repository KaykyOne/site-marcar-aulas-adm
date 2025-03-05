import React, { useState } from "react";
import "../styles/Components.css";
import Logo from "../imgs/logoNovusCFC.png";
import ButtonBack from "./ButtonBack";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "person", name: "Alunos" },
    { icon: "badge", name: "Instrutores" },
    { icon: "list_alt", name: "Aulas" },
    { icon: "settings", name: "Configuracoes" },
  ];

  return (
    <div className="container-vertical bg-primary">
      <img src={Logo} onClick={() => navigate('/Home')} className={"pointer"} />
      {menuItems.map(menu => (
        <Button style={1} icon={menu.icon} key={menu.id} children={menu.name} onClick={() => navigate(`/${menu.name}`)}/>
      ))}

      <ButtonBack style={1} onClick={() => navigate("/")}>Sair</ButtonBack>
    </div>
  );
}

export default Menu;

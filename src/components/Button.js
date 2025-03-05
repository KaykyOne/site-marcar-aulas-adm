import React from 'react';
import '../styles/Components.css';

export default function Button({ children, onClick, icon, style }) {
  return (
    <button className={style == 1 ? "button-invertido" : "button-padrao"} onClick={onClick}>
      {icon && <span class="material-icons">
        {icon}
      </span>}
      {children} {/* Texto do botão */}
    </button>
  );
}

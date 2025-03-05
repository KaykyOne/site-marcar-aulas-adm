import React from "react";
import "../styles/Components.css"; // Arquivo de estilos

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner" ></div>
    </div>
  );
}

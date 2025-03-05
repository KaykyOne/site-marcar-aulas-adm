import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Input from "./Input";

export default function ListGridToggle({ columns, rows }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtrando os dados conforme o texto digitado
  const filteredRows = rows.filter((row) =>
    columns.some((col) =>
      String(row[col.field]).toLowerCase().includes(searchTerm)
    )
  );

  return (
    <div>
      {/* Input de busca única */}
      <div className="container-simple">
        <p>Busque por qualquer campo! <br /> (Telefone, Nome, etc)</p>
        <Input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="container-grid">
        {/* Tabela dinâmica */}
        <DataGrid
          style={{ width: "100%", maxWidth: '500px' }}
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[5]}
          getRowId={(row) => row.ID}
        />
      </div>
    </div>
  );
}

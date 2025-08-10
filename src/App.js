import React, { useState } from "react";
import ExcelUpload from "./components/ExcelUpload";
import DataTable from "./components/DataTable";

function App() {
  const [data, setData] = useState([]);
  const [empleadoFiltro, setEmpleadoFiltro] = useState("");

  const empleados = [...new Set(data.map(row => row.Empleado))];

  const dataFiltrada = empleadoFiltro
    ? data.filter(row => row.Empleado === empleadoFiltro)
    : data;

  return (
    <div style={{ padding: 20 }}>
      <h1>Filtro de Empleados</h1>
      <ExcelUpload setData={setData} />

      {data.length > 0 && (
        <>
          <select
            onChange={(e) => setEmpleadoFiltro(e.target.value)}
            value={empleadoFiltro}
            style={{ marginTop: 20, padding: 5 }}
          >
            <option value="">Todos</option>
            {empleados.map((emp, idx) => (
              <option key={idx} value={emp}>{emp}</option>
            ))}
          </select>

          <DataTable data={dataFiltrada} />
        </>
      )}
    </div>
  );
}

export default App;

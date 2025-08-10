import React from "react";

function DataTable({ data }) {
  return (
    <table border="1" cellPadding="5" style={{ marginTop: 20, borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Empleado</th>
          <th>Horas</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.Empleado}</td>
            <td>{row.Horas}</td>
            <td>{row.Fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;

import React, { useState, useEffect } from "react";

function Produktai() {
  const [produktai, setProduktai] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/produktai")
      .then((response) => response.json)
      .then((data) => setProduktai(data))
      .catch((error) => console.error("Klaida gaunant duomenis: ", error));
  }, []);

  return (
    <div>
      <h2>Produktų sąrašas</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produkto pavadinimas</th>
            <th>Kaina (€)</th>
          </tr>
        </thead>
        <tbody>
          {produktai.map((produktas) => (
            <tr key={produktas.id}>
              <td>{produktas.id}</td>
              <td>{produktas.produkto_pavadinimas}</td>
              <td>{produktas.kaina.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Produktai;

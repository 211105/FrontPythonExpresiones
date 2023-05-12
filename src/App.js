import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [palabra, setPalabra] = useState('');
  const [resultados, setResultados] = useState([]);
  const [requestType, setRequestType] = useState('GET');

  const handleInputChange = (e) => {
    setPalabra(e.target.value);
  };

  const handleRequestTypeChange = (e) => {
    setRequestType(e.target.value);
  };

  const buscarClientes = async () => {
    let response;
    if (requestType === 'GET') {
      response = await axios.get(`http://localhost:5000/buscar_clientes?palabra=${palabra}`);
    } else {
      response = await axios.post('http://localhost:5000/buscar_clientes', { palabra });
    }

    setResultados(response.data);
  };

  return (
    <div>
      <h1>Buscador de clientes</h1>
      <div>
        <label>
          Palabra:
          <input
            type="text"
            value={palabra}
            onChange={handleInputChange}
            placeholder="Ingresa la palabra que deseas buscar"
          />
        </label>
      </div>
      <div>
        <label>
          Tipo de solicitud:
          <select value={requestType} onChange={handleRequestTypeChange}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
          </select>
        </label>
      </div>
      <button onClick={buscarClientes}>Buscar</button>
      <div>
        <h2>Resultados:</h2>
        {resultados.map((cliente, index) => (
          <div key={index}>
            <p>Clave del cliente: {cliente.clave_cliente}</p>
            <p>Nombre contacto: {cliente.nombre_contacto}</p>
            <p>Correo: {cliente.correo}</p>
            <p>Teléfono contacto: {cliente.telefono_contacto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import './assets/App.css'

const styles = {
  containerApp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  th: {
    backgroundColor: "#f2f2f2",
    color: "black",
    textAlign: "left",
    padding: "8px",
  },
  td: {
    border: "1px solid #ddd",
    textAlign: "left",
    padding: "8px",
  },
};

function App() {
  const [clientes, setClientes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://127.0.0.1:5000/buscar/${inputValue}`);
    const data = await response.json();
    setClientes(data);
  };

  return (
    <>
      <div className="container_App">
        <div className="search">
          <form className="searching" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="input-group-append">
              <button type="submit">Buscar</button>
            </div>
          </form>
        </div>
        <div className="result">
          <div className="container_list">
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Clave cliente</th>
                  <th style={styles.th}>Nombre Contacto </th>
                  <th style={styles.th}>Correo</th>
                  <th style={styles.th}>Teléfono Contacto</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{cliente["Clave cliente"]}</td>
                    <td style={styles.td}>{cliente["   Nombre Contacto "]}</td>
                    <td style={styles.td}>{cliente["Correo "]}</td>
                    <td style={styles.td}>{cliente["Teléfono Contacto  "]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

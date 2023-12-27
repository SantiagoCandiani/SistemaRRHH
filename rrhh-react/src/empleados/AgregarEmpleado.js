import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgregarEmpleado() {
  let navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    departamento: "",
    sueldo: ""
  });

  const { nombre, apellido, dni, departamento, sueldo } = empleado;

  const onInputChange = (e) => {
    //spread operator ... (expandir los atributos del objeto empleado)
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rrhh-app/empleados";
    await axios.post(urlBase, empleado);
    //Redirigimos a la pagina de inicio
    navegacion("/");
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlfor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            id="apellido"
            name="apellido"
            required={true}
            value={apellido}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="dni" className="form-label">
            DNI
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="DNI"
            id="dni"
            name="dni"
            required={true}
            value={dni}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Departamento"
            id="departamento"
            name="departamento"
            required={true}
            value={departamento}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="sueldo" className="form-label">
            Sueldo
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Sueldo"
            id="sueldo"
            name="sueldo"
            required={true}
            value={sueldo}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Agregar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}

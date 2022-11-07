import "../../css/vet.css";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return(
        <div className="container-fluid-vet">
  <div className="head row">
    <div className="logo-header col-2">
      <img className="logo" src={require("../../assets/logo2.PNG")} alt="logo Huellitas" />
      <span className="header-title">Veterinaria Huellitas</span>
    </div>
    <div className="col-auto">
      <Link className="btn btn-primary" to="/" role="button">
        Cerrar Sesión
      </Link>
    </div>
  </div>
  <div className="container text-center">
    <div className="row">
      <div className="main-component">
        <span className="main-title">¡Bienvenida, Ana!</span>
        <br />
        <span className="main-title">Esta es tu agenda de hoy</span>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Fecha y hora</th>
              <th scope="col">Tipo de consulta</th>
              <th scope="col">Estado</th>
              <th scope="col">Responsable</th>
              <th scope="col">Mascota</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11/09/2022 8:00 am</th>
              <td>Desparasitación</td>
              <td>Completada</td>
              <td>Sergio Castillo</td>
              <td>Lucky</td>
              <td>
                <i className="table-icon bi bi-pencil-square" />
                <i className="table-icon bi bi-x-square" />
              </td>
            </tr>
            <tr>
              <th scope="row">11/09/2022 10:00 am</th>
              <td>Laboratorio</td>
              <td>Cancelada</td>
              <td>Camila Soto</td>
              <td>Panterita</td>
              <td>
                <i className="table-icon bi bi-pencil-square" />
                <i className="table-icon bi bi-x-square" />
              </td>
            </tr>
            <tr>
              <th scope="row">11/09/2022 10:00 am</th>
              <td>Vacunación</td>
              <td>Completada</td>
              <td>Valentina Peña</td>
              <td>Tony</td>
              <td>
                <i className="table-icon bi bi-pencil-square" />
                <i className="table-icon bi bi-x-square" />
              </td>
            </tr>
            <tr>
              <th scope="row">11/09/2022 12:00 pm</th>
              <td>Chequeo</td>
              <td>Pendiente</td>
              <td>Carlos Rincón</td>
              <td>Bigotes</td>
              <td>
                <i className="table-icon bi bi-pencil-square" />
                <i className="table-icon bi bi-x-square" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <footer>
    <h6>Misión TIC Todos los derechos reservados ©</h6>
  </footer>
</div>
    )
}

export default Dashboard;
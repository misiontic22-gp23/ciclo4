import "../../css/client.css";
import React from "react";
import { Link } from "react-router-dom";
import Calendar from "../../components/icons/calendar";
import Paw from "../../components/icons/paw";
import Container from "react-bootstrap/Container";

function Pet_register() {
    return(
        <div className="container-fluid">
  <div className="head row">
    <div className="logo-header col-2">
      <img className="logo" src={require("../../assets/logo2.PNG")} alt="logo Huellitas" />
      <span className="header-title">Veterinaria Huellitas</span>
    </div>
    <div className="col-auto">
      <Link className="btn btn-primary" to="/" role="button">
        Regresar
      </Link>
    </div>
  </div>
  <div className="container text-center">
    <div className="row">
      <Container className="left-component col-2">
        <span className="left-title">¡Bienvenido, Carlos!</span>
        <div className="left-option">
          <span className="option-text">Mascotas</span>
          <div className="option-icon-component">
            <Paw />
          </div>
        </div>
        <div className="left-option">
          <span className="option-text">Citas</span>
          <div className="option-icon-component">
          <Calendar />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Cerrar Sesión
        </button>
      </Container>
      <Container className="col-10">
        <div className="form">
          <span className="main-title">Registra tu mascota</span>
          <form id="mascota-insert">
            <div className="item row">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Nombre
                </label>
              </div>
              <div className="col-auto">
                <input type="text" name="nombre" className="form-control" />
              </div>
            </div>
            <div className="item row">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Especie
                </label>
              </div>
              <div className="col-auto">
                <select
                  className="form-select"
                  name="especie"
                  aria-label="Default select example"
                >
                  <option selected="">Seleccionar</option>
                  <option value={1}>Perro</option>
                  <option value={2}>Gato</option>
                  <option value={3}>Otro</option>
                </select>
              </div>
            </div>
            <div className="item row">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Raza
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  name="raza"
                  className="form-control"
                  placeholder="Opcional"
                />
              </div>
            </div>
            <div className="item row">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Sexo
                </label>
              </div>
              <div className="col-auto">
                <input type="text" name="sexo" className="form-control" />
              </div>
            </div>
            <div className="item row">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Edad
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="number"
                  name="edad"
                  className="form-control"
                  placeholder="Opcional"
                />
              </div>
            </div>
            <div className="item row">
              <div className="col-auto">
                <img
                  src="/assets/paw-solid.svg"
                  className="form-icon img-thumbnail"
                  alt="Imagen por defecto"
                />
                <br />
                <span>Opcional</span>
              </div>
              <div className="col-auto align-self-center">
                <button type="submit" className="btn btn-primary">
                  Sube una foto
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </form>
        </div>
      </Container>
    </div>
  </div>
  <footer>
    <h6>Misión TIC Todos los derechos reservados ©</h6>
  </footer>
</div>
    );
};

export default Pet_register;
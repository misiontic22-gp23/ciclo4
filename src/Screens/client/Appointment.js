import "../../css/client.css";
import React from "react";
import { Link } from "react-router-dom";
import Paw from "../../components/icons/paw";
import Calendar from "../../components/icons/calendar";
import Container from "react-bootstrap/Container";

function Appointment() {
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
      <div className="left-component col-2">
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
      </div>
      <div className="col-10">
        <div className="form">
          <span className="main-title">Registra tu mascota</span>
          <div className="item row">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Fecha
              </label>
            </div>
            <div className="col-auto">
              <input type="date" id="inputPassword6" className="form-control" />
            </div>
          </div>
          <div className="item row">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Hora
              </label>
            </div>
            <div className="col-auto">
              <input type="time" id="inputPassword6" className="form-control" />
            </div>
          </div>
          <div className="item row">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Mascota
              </label>
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Seleccionar</option>
                <option value={1}>Firulais</option>
                <option value={2}>Pancha</option>
                <option value={3}>Bigotes</option>
              </select>
            </div>
          </div>
          <div className="item row">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Especialista
              </label>
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Seleccionar</option>
                <option value={1}>Ana Vergel</option>
                <option value={2}>Mauricio Acosta</option>
              </select>
            </div>
          </div>
          <div className="item row">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Tipo de consulta
              </label>
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">Seleccionar</option>
                <option value={1}>Chequeo</option>
                <option value={2}>Desparasitación</option>
                <option value={3}>Vacunación</option>
                <option value={4}>Laboratorio</option>
              </select>
            </div>
          </div>
          <div className="item row">
            <div className="item-component">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Danos una breve descripción de tu consulta
                </label>
              </div>
              <Container className="col-auto-1">
                <input
                  type="text"
                  id="inputPassword6"
                  className="obs-input form-control"
                  placeholder="Opcional"
                />
              </Container>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Agendar
          </button>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <h6>Misión TIC Todos los derechos reservados ©</h6>
  </footer>
</div>
    );
};

export default Appointment;
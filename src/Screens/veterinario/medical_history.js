import "../../css/vet.css";
import React from "react";
import { Link } from "react-router-dom";

function medical_history() {
    return(
        <div className="container-fluid-vet">
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
  <div className="main-container">
    <div className="history-form">
      <span className="main-title my-3">Historia Clínica</span>
      <div className="item row">
        <div className="col">
          <label htmlFor="inputDate" className="col-form-label">
            Fecha
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputDate" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputHour" className="col-form-label">
            Hora
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputHour" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputType" className="col-form-label">
            Tipo de consulta
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputType" className="form-control" />
        </div>
      </div>
      <div className="item row">
        <div className="col">
          <label htmlFor="inputOwner" className="col-form-label">
            Responsable
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputOwner" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputPet" className="col-form-label">
            Nombre mascota
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputPet" className="form-control" />
        </div>
      </div>
      <div className="item row">
        <div className="col">
          <label htmlFor="inputBreed" className="col-form-label">
            Raza
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputBreed" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputAge" className="col-form-label">
            Edad
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputAge" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputWeight" className="col-form-label">
            Peso
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputWeight" className="form-control" />
        </div>
      </div>
      <div className="item row">
        <div className="col">
          <label htmlFor="inputFC" className="col-form-label">
            FC
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputFC" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputFR" className="col-form-label">
            FR
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputFR" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="inputTemperature" className="col-form-label">
            Temperatura
          </label>
        </div>
        <div className="col">
          <input type="text" id="inputTemperature" className="form-control" />
        </div>
      </div>
      <div className="item row">
        <div className="item-component">
          <div className="col">
            <label htmlFor="inputObs" className="obs-title col-form-label">
              Recomendaciones
            </label>
          </div>
          <div className="col">
            <input
              type="text"
              id="inputObs"
              className="obs-input form-control"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Guardar
      </button>
    </div>
    <button type="submit" className="btn-logout btn btn-primary">
      Cerrar sesión
    </button>
  </div>
  <footer>
    <h6>Misión TIC Todos los derechos reservados ©</h6>
  </footer>
</div>

    );
};

export default medical_history;
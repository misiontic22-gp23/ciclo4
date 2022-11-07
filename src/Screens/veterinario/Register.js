import "../../css/vet.css";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid-vet">
      <div className="head">
        <div className="logo-header">
          <img className="logo" src={require("../../assets/logo2.PNG")} alt="logo Huellitas" />
          <span className="header-title">Veterinaria Huellitas</span>
        </div>
        <div>
          <Link className="btn btn-primary" to="/" role="button">
            Regresar
          </Link>
        </div>
      </div>
      <div className="form">
        <span className="form-title">Registro</span>
        <form id="vet-insert">
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputName" className="col-form-label">
                Nombre
              </label>
            </div>
            <div className="col">
              <input type="text" name="nombre" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputID" className="col-form-label">
                Cédula
              </label>
            </div>
            <div className="col">
              <input type="number" name="cedula" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputTP" className="col-form-label">
                Matrícula profesional
              </label>
            </div>
            <div className="col">
              <input type="number" name="matricula" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputTel" className="col-form-label">
                Teléfono
              </label>
            </div>
            <div className="col">
              <input type="tel" name="telefono" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputEmail" className="col-form-label">
                E-mail
              </label>
            </div>
            <div className="col">
              <input type="email" name="email" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputUser" className="col-form-label">
                Usuario
              </label>
            </div>
            <div className="col">
              <input type="text" name="usuario" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputPassword" className="col-form-label">
                Contraseña
              </label>
            </div>
            <div className="col">
              <input type="password" name="password" className="form-control" />
            </div>
          </div>
          <div className="item row g-3">
            <div className="col">
              <label htmlFor="inputRepeatPassword" className="col-form-label">
                Confirmar contraseña
              </label>
            </div>
            <div className="col">
              <input
                type="password"
                id="inputRepeatPassword"
                className="form-control"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
        <span className="register-link">¿Ya tienes cuenta?</span>
        <Link className="link" to="/vet-login">
          Inicia sesión
        </Link>
      </div>
      <footer>
        <h6>Misión TIC Todos los derechos reservados ©</h6>
      </footer>
    </div>
  );
}

export default Register;

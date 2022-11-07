import "../../css/client.css";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container-fluid">
            <div className="head row">
                <div className="logo-header col-2">
                    <img className="logo" src={require('../../assets/logo2.PNG')} alt="logo Huellitas" />
                    <span className="header-title">Veterinaria Huellitas</span>
                </div>
                <div className="col-auto">
                    <Link className="btn btn-primary" to="/" role="button">
                        Regresar
                    </Link>
                </div>
            </div>
            <div className="form">
                <span className="form-title">Inicia sesión</span>
                <div className="item row g-3">
                    <div className="col">
                        <label htmlFor="inputUser" className="col-form-label">
                            Usuario
                        </label>
                    </div>
                    <div className="col">
                        <input type="text" id="inputUser" className="form-control" />
                    </div>
                </div>
                <div className="item row g-3">
                    <div className="col">
                        <label htmlFor="inputPassword" className="col-form-label">
                            Password
                        </label>
                    </div>
                    <div className="col">
                        <input type="password" id="inputPassword" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Ingresar
                </button>
                <Link className="link" To="#">
                    Olvidé mi contraseña
                </Link>
                <span className="register-link">
                    ¿No tienes cuenta?
                    <Link className="link" to="/cl-register">Regístrate</Link>
                </span>
            </div>
            <footer>
                <h6>Misión TIC Todos los derechos reservados ©</h6>
            </footer>
        </div>

    )
}

export default Login;
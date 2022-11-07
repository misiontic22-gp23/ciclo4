import "../../css/client.css";
import React from "react";
import { Link } from "react-router-dom";
import Paw from "../../components/icons/paw";
import Calendar from "../../components/icons/calendar";

function Dashboard() {
    return(
        <div class="container-fluid">
        <div class="head row">
            <div class="logo-header col-2">
                <img class="logo" src={require("../../assets/logo2.PNG")} alt="logo Huellitas" />
                <span class="header-title">Veterinaria Huellitas</span>
            </div>
            <div className="col-auto">
                    <Link className="btn btn-primary" to="/" role="button">
                        Regresar
                    </Link>
                </div>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="left-component col-2">
                    <span class="left-title">¡Bienvenido, Carlos!</span>
                    <div class="left-option">
                        <span class="option-text">Mascotas</span>
                        <div class="option-icon-component">
                            <Paw />
                        </div>
                    </div>
                    <div class="left-option">
                        <span class="option-text">Citas</span>
                        <div class="option-icon-component">
                            <Calendar />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Cerrar Sesión</button>
                </div>
                <div class="main-component col-10">
                    <span class="main-title">Estas son tus citas agendadas</span>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Fecha y hora</th>
                                <th scope="col">Tipo de consulta</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Especialista</th>
                                <th scope="col">Mascota</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">01/09/2022 4:00 pm</th>
                                <td>Desparasitación</td>
                                <td>Pendiente</td>
                                <td>Mauricio Acosta</td>
                                <td>Firulais</td>
                                <td>
                                    <i class="table-icon bi bi-pencil-square"></i>
                                    <i class="table-icon bi bi-x-square"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">07/09/2022 2:00 pm</th>
                                <td>Laboratorio</td>
                                <td>Cancelada</td>
                                <td>Ana Vergel</td>
                                <td>Pancha</td>
                                <td>
                                    <i class="table-icon bi bi-pencil-square"></i>
                                    <i class="table-icon bi bi-x-square"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">10/09/2022 10:00 am</th>
                                <td>Vacunación</td>
                                <td>Pendiente</td>
                                <td>Mauricio Acosta</td>
                                <td>Pancha</td>
                                <td>
                                    <i class="table-icon bi bi-pencil-square"></i>
                                    <i class="table-icon bi bi-x-square"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">15/09/2022 12:00 pm</th>
                                <td>Chequeo</td>
                                <td>Pendiente</td>
                                <td>Ana Vergel</td>
                                <td>Bigotes</td>
                                <td>
                                    <i class="table-icon bi bi-pencil-square"></i>
                                    <i class="table-icon bi bi-x-square"></i>
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
    );
};

export default Dashboard;
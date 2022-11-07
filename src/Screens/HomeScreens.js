import "../css/home.css";
import React from "react";
import Stethoscope from '../components/icons/stethoscope';
import Calendar from "../components/icons/calendar";
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

function HomeScreen() {
    return(
        <div className="container-fluid">
            <div className="head-home">
              <img className="logo" src={require('../assets/logo2.PNG')} alt="logo Huellitas" />
              <h1>Bienvenido a tu Veterinaria Huellitas</h1>
              <h2>Más que tu mascota, es tu familia</h2>
            </div>
            <div className="container">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide mb-4"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={3}
                    aria-label="Slide 4"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={3000}>
                    <img
                      src={require('../assets/dogtor.jpg')}
                      className="img-item d-block w-100"
                      alt="Perrito doctor"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Cuidados especiales</h5>
                      <p>Contamos con los mejores profesionales.</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <img
                      src={require("../assets/vet1.jpg")}
                      className="img-item d-block w-100"
                      alt="Veterinario"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>El mejor trato</h5>
                      <p>Cuidamos a tu amigo como tú a él.</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <img
                      src={require('../assets/desparasitarVet.jpg')}
                      className="img-item d-block w-100"
                      alt="Desparasitación perro"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Desparasitación</h5>
                      <p>Para mantener sano a tu amigo.</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <img
                      src={require('../assets/vacunaVet.jpg')}
                      className="img-item d-block w-100"
                      alt="Vacunación perro"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Vacunación</h5>
                      <p>Completa su esquema para prevenir enfermedades.</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="login-cards">
                <Container className="card-component">
                  <Link to="/cl-login">
                    <h2 className="card-text">Inicia sesión para agendar tu cita</h2>
                    <Calendar />
                  </Link>
                </Container>
                <Container className="card-component">
                  <Link to="/vet-login">
                    <h2 className="card-text">Acceso para veterinarios</h2>
                    <Stethoscope />
                  </Link>
                </Container>
              </div>
            </div>
            <div className="footer-component">
              <h6>Misión TIC Todos los derechos reservados ©</h6>
            </div>
          </div>
    );
}

export default HomeScreen;
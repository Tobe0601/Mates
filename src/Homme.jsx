import React from "react";
import Products from "./components/Productss";

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-white border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="Background"
          height="570px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0 text-dark">
              NUEVAS PRENDAS FACHERAS
            </h5>
            <p class="card-text lead fs-2 text-dark">
              CHECA TODOS NUESTROS ESTILOS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

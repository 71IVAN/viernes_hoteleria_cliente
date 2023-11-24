import { useEffect, useState } from "react";
import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
import { Banner } from "../Banner/Banner";
import { Hotel } from "../Hotel/Hotel";
import { Galeria } from "../Galeria/Galeria";
import { Precios } from "../Precios/Precios"
import { Ubicacion } from "../Ubicacion/Ubicacion";
import { Footer } from "../Footer/Footer";


export function Home() {
  return (
    <>
      <div className="banner">
        <div className="row my-4">
          <Banner></Banner>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 text-white fw-bold">
            <h3>Reserva con nostros</h3>
            <hr />
            <Formulario></Formulario>
          </div>
         
        </div>
      </div>
    

      <div className="row">
        <Hotel></Hotel>
      </div>

      <div className="row">
        <Galeria></Galeria>
      </div>

      <div className="row">
        <Precios></Precios>

      </div>

      <div className="row">
         <Ubicacion></Ubicacion>
      </div>

      <div className="row">
        <Footer></Footer>
      </div>
    </>
  );
}

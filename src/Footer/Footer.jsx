import "./Footer.css";

export function Footer() {
  return (
    <>
     <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>
              Teléfono: +57 321 111 54 45 <br />
              Correo Electrónico: info@hotelAIOS.com
            </p>
          </div>
          <div className="col-md-4">
            <h5>Horario de Atención</h5>
            <p>
              Lunes a Viernes: 9:00 am - 6:00 pm <br />
              Sábados y Domingos: 24 Horas Abierto
            </p>
          </div>
          <div className="col-md-4">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Hotel AIOS. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

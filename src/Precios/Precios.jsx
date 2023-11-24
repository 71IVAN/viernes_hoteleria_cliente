import './Precios.css'; // Importa tu archivo de estilos CSS

export function Precios() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Habitación Estándar</h5>
              <p className="card-text">Precio: $100 por noche</p>
              <p className="card-text">Descripción: Habitación con comodidades básicas.</p>
              <a href="#" className="btn btn-primary">Reservar</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Suite Deluxe</h5>
              <p className="card-text">Precio: $200 por noche</p>
              <p className="card-text">Descripción: Habitación lujosa con vistas panorámicas.</p>
              <a href="#" className="btn btn-primary">Reservar</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Suite Ejecutiva</h5>
              <p className="card-text">Precio: $250 por noche</p>
              <p className="card-text">Descripción: Habitación amplia con servicios VIP.</p>
              <a href="#" className="btn btn-primary">Reservar</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Habitación Familiar</h5>
              <p className="card-text">Precio: $180 por noche</p>
              <p className="card-text">Descripción: Habitación espaciosa para toda la familia.</p>
              <a href="#" className="btn btn-primary">Reservar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

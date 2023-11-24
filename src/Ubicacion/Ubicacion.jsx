import './Ubicacion.css'; 

export function Ubicacion() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/google-maps-22.jpg?alt=media&token=ed97607b-e0c5-4b75-8fa7-988bffe9cd0d"
            alt="Mapa de cómo llegar al hotel"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mb-4">
          <div className="descripcion">
            <h2>Cómo llegar</h2>
            <p>
              <strong>Teléfono:</strong> +57 321 111 54 45
            </p>
            <p>
              <strong>Dirección:</strong> Calle CR7, 12 - 38, Ciudad Del Siuuuu
            </p>
            <p>
              <strong>Correo Electrónico:</strong> info@hotelAIOS.com
            </p>
            <p>
              <em>Bienvenido al Hotel AIOS, donde los sueños se hacen realidad.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



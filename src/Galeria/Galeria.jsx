import './Galeria.css'; // Importa tu archivo de estilos CSS

export function Galeria() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 mb-3">
          <img src='https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/galeria1.jpg?alt=media&token=3f38a1eb-ac95-4e42-835c-5e750e0fe679' alt="Imagen 1" className="img-fluid" />
        </div>
        <div className="col-md-3 mb-3">
          <img src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/galeria2.jpg?alt=media&token=773669ec-b114-47f6-ab6a-dec5cbbf9cda" alt="Imagen 2" className="img-fluid" />
        </div>
        <div className="col-md-3 mb-3">
          <img src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/galeria3.jpg?alt=media&token=55dff09a-2a9f-479c-a04b-cbf479c19550" alt="Imagen 3" className="img-fluid" />
        </div>
        <div className="col-md-3 mb-3">
          <img src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/galeria4.jpg?alt=media&token=9fba4c97-c105-4189-bbfc-0e25e4e62faa" alt="Imagen 4" className="img-fluid" />
        </div>
      </div>
    </div>



  );
}



import "./Hotel.css"

export function Hotel(){
    return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 historia">
              <h2>Historia</h2>
              <p>
                El Hotel AIOS, fundado en el año 1975, emerge en medio de las
                colinas verdes del valle, rodeado por la naturaleza y la tranquilidad.
                Su historia se entrelaza con leyendas locales que cuentan la
                hospitalidad de la familia que lo inició como un pequeño refugio para
                viajeros cansados en busca de paz y comodidad.
              </p>
            </div>
    
            <div className="col-md-6 quienes-somos">
              <h2>Quiénes somos</h2>
              <p>
                En el Hotel AIOS, nos enorgullecemos de ser un oasis de descanso
                y hospitalidad. Nuestro objetivo es brindar a nuestros huéspedes una
                experiencia única, donde cada detalle está cuidadosamente diseñado
                para crear recuerdos duraderos. Desde nuestro personal atento y amable
                hasta nuestras instalaciones de primera clase, nos esforzamos por
                superar las expectativas de nuestros visitantes.
              </p>
              <p>
                Nuestro compromiso es ofrecer un servicio excepcional, una gastronomía
                exquisita, actividades emocionantes y un entorno relajante para que
                cada estancia sea inolvidable. Más que un simple hotel, somos un
                destino donde los sueños se hacen realidad y se construyen relaciones
                duraderas con nuestros huéspedes.
              </p>
            </div>
          </div>
        </div>
      );
    }

export function Formulario() {
    return (
      <>
        <form>
          <div className="row">
            <div className="col-12 col-md-6">
              <div class="mb-3">
                <label className="form-label">
                  Nombre
                </label>
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-12 col-md-6">
            <div class="mb-3">
                <label className="form-label">
                  Telefono
                </label>
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div class="mb-3">
                <label className="form-label">
                  Fecha Entrada
                </label>
                <input type="date" className="form-control"/>
              </div>
            </div>
            <div className="col-12 col-md-6">
            <div class="mb-3">
                <label className="form-label">
                  Fecha Salida
                </label>
                <input type="date" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </form>
      </>
    );
  }
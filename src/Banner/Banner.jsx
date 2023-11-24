export function Banner() {
  return (
    <>
       <form className="row g-3">
      <div className="col-auto">
        <span className="form-text text-white fs-4 px-3">AIOS</span>
      </div>
      <div className="col-auto">
        <span className="form-text text-white">NOSOTROS</span>
      </div>
      <div className="col-auto">
        <span className="form-text text-white">HABITACIONES</span>
      </div>
      <div className="col-auto">
        <span className="form-text text-white">PASEOS</span>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Buscar</button>
      </div>
    </form>
    </>
  );
}

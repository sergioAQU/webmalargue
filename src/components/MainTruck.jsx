const MainTruck = () => {
  return (
    <div className="container-fluid">
      <div className="section-door">
        <div className="section-door-container-text my-auto">
          <span className="section-truck-text mb-5">
            Contamos con más de <span className="section-truck-text-bold mb-5">75 años de trayectoria</span>, destacándonos por la
            seguridad y calidad del servicio.
          </span>
          <span role="button" class="btn-pill bg-secondary d-inline-block">
            Consultá por tu envío
          </span>
        </div>
        <div className="section-door-img">
          <img src={`assets/camion.jpg`} alt="camion" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default MainTruck;

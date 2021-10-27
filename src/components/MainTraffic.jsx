const MainTraffic = ({button, background}) => {
  return (
    <div className="container-fluid section-traffic">
      <img src={`assets/trafic.jpg`} alt="trafic" className="main-trafic-img" />
      <div className={`${background} d-flex flex-column justify-content-center align-items-center text-left`}>
        <span className="section-trafic-text-title">
          Recorremos las rutas del paÍs llevando todos tus envÍos.
        </span>
        <span role="button" className={`btn-pill bg-${button}`}>
          Consultá por tu envío
        </span>
      </div>
    </div>
  );
};
export default MainTraffic;

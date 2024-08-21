import "./Informations.scss";

const Informations = ({ ip, location, timezone, isp }) => {
  return (
    <div className="Informations">
      <div className="Informations-section">
        <div className="Informations-section-desktop">
          <h2 className="Informations-title">Ip address</h2>
          <p className="Informations-data">{ip}</p>
        </div>
        <div className="Informations-section-desktop">
          <h2 className="Informations-title">Location</h2>
          <p className="Informations-data"> {location}</p>
        </div>
        <div className="Informations-section-desktop">
          <h2 className="Informations-title">Timezone</h2>
          <p className="Informations-data">UTC {timezone}</p>
        </div>

        <div className="Informations-section-desktop">
          <h2 className="Informations-title">isp</h2>
          <p className="Informations-data"> {isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Informations;

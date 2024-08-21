import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const DisplayMap = ({ lat, lng }) => {
  function ChangeView({ center }) {
    const map = useMap();
    map.flyTo(center, 13, {
      animate: true,
    });
    return null;
  }

  const position = [lat, lng];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/6943/6943471.png",
    iconSize: [52, 52],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      zoomControl={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <ChangeView center={position} />
      </Marker>
    </MapContainer>
  );
};

export default DisplayMap;

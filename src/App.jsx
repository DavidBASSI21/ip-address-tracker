import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Informations from "./Informations/Informations";
import DisplayMap from "./DisplayMap/DisplayMap";
import axios from "axios";

function App() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState(" - ");
  const [timezone, setTimezone] = useState(" - ");
  const [isp, setIsp] = useState(" - ");
  const [lat, setLat] = useState(48.862725);
  const [lng, setLng] = useState(2.287592);

  const getIpAdress = () => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_HwGDyppTYcETsnLWxWdWOhSopDQxz"
      )
      .then((response) => {
        console.log(response.data);
        setIp(response.data.ip);
        setLocation(response.data.location.region);
        setTimezone(response.data.location.timezone);
        setIsp(response.data.isp);
        setLat(response.data.location.lat);
        setLng(response.data.location.lng);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getIpAdress();
  }, []);

  return (
    <>
      <Header
        ip={ip}
        location={location}
        timezone={timezone}
        isp={isp}
        setIp={setIp}
        setLocation={setLocation}
        setTimezone={setTimezone}
        setIsp={setIsp}
        setLat={setLat}
        setLng={setLng}
        onSearch={getIpAdress}
      />
      {
        <Informations
          ip={ip}
          location={location}
          timezone={timezone}
          isp={isp}
        />
      }
      <DisplayMap lat={lat} lng={lng} />
    </>
  );
}

export default App;

import { FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import "./Header.scss";
import { useState } from "react";

const Header = ({
  ip,
  location,
  timezone,
  isp,
  setIp,
  setLocation,
  setTimezone,
  setIsp,
  setLat,
  setLng,
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  const searchByDomain = (inputValue) => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_HwGDyppTYcETsnLWxWdWOhSopDQxz&domain=${inputValue}`
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

  return (
    <div className="header">
      <h1 className="header-title">IP Address Tracker</h1>
      <div className="header-input-container">
        <input
          className="header-input"
          autoFocus
          type="text"
          name=""
          id=""
          placeholder="Search by IP or domain name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="header-button"
          type="submit"
          onClick={() => searchByDomain(inputValue)}
        >
          {" "}
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Header;

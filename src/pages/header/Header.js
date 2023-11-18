import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="headerLinks">
        <span className="linkName" onClick={() => navigate("/")}>
          HOME
        </span>
        <span className="linkName" onClick={() => navigate("playLists")}>
          DISEASES
        </span>
        <span className="linkName" onClick={() => navigate("doctors")}>
          DOCTORS
        </span>
        <span className="linkName" onClick={() => navigate("aboutUs")}>
          ABOUT US
        </span>
        <span className="linkName" onClick={() => navigate("contactUs")}>
          CONTACT US
        </span>
      </div>
    </div>
  );
};

export default Header;

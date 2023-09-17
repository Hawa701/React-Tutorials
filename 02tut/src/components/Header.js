import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <header>
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt className="icon" />
      ) : width < 992 ? (
        <FaTabletAlt className="icon" />
      ) : (
        <FaLaptop className="icon" />
      )}
    </header>
  );
};

export default Header;

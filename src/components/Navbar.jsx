import React, { useContext } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import arrow_icon from "../assets/arrow_icon.png";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "brl": {
        setCurrency({ name: "brl", symbol: "R$" });
        break;
      }

      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }

      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }

      default: {
        setCurrency({ name: "brl", symbol: "R$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
       <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Preços</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="brl">BRL</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Inscrever-se <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

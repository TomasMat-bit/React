import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Pagrindinis
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Apie mus
      </NavLink>
      <NavLink
        to="/user/1"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Vartotojas 1
      </NavLink>
    </nav>
  );
}

export default Navbar;

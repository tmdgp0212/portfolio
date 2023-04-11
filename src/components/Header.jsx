import { Link, NavLink } from "react-router-dom";
import * as S from "../style/styleComponents";

function Header() {
  return (
    <S.Header id="header">
      <div className="container">
        <h1>
          <img src="/assets/logo.png" alt="logo" />
          SeungHye Portfolio
        </h1>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Profile
          </NavLink>
          ›››
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/works"
          >
            Works
          </NavLink>
          ›››
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </S.Header>
  );
}

export default Header;

import SearchBar from "../SearchBar/SearchBar";
import { Link as NavLink } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav>
      <NavLink
        to="/"
        style={{
          margin: "10px 30px",
          textDecoration: "none",
          fontSize: "25px",
          fontWeight: "bold",
          color: " rgba(3, 156, 3, 0.904)",
        }}
      >
        Logout
      </NavLink>
      <NavLink
        to="home"
        style={{
          margin: "10px 30px",
          textDecoration: "none",
          fontSize: "25px",
          fontWeight: "bold",
          color: " rgba(3, 156, 3, 0.904)",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        style={{
          margin: "10px 30px",
          textDecoration: "none",
          fontSize: "25px",
          fontWeight: "bold",
          color: " rgba(3, 156, 3, 0.904)",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="Favorites"
        style={{
          margin: "10px 30px",
          textDecoration: "none",
          fontSize: "25px",
          fontWeight: "bold",
          color: " rgba(3, 156, 3, 0.904)",
        }}
      >
        Favorites
      </NavLink>
      <SearchBar onSearch={props.onSearch} random={props.random} />
    </nav>
  );
}

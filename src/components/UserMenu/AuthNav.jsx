import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <Nav>
      <Nav.Link as={NavLink} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login">
        Login
      </Nav.Link>
    </Nav>
  );
};

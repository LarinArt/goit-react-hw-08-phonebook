import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selector";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { AuthNav } from "components/UserMenu/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { motion } from "framer-motion";
import { BiHome } from "react-icons/bi";
import styled from "styled-components";

const UserIcon = styled(BiHome)`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

  :hover,
  :focus {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const Header = () => {
  const user = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand
              style={{ fontSize: "40px", fontWeight: "900" }}
              as={Link}
              to="/"
            >
              Phonebook
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="navbar-collapse collapse justify-content-between"
            >
              <Nav style={{ alignItems: "center" }}>
                <Nav.Link active as={NavLink} to="/">
                  <UserIcon />
                </Nav.Link>
                {user && (
                  <Nav.Link as={NavLink} to="/contacts">
                    Contacts
                  </Nav.Link>
                )}
              </Nav>
              <Nav>{user ? <UserMenu /> : <AuthNav />}</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
};

export default Header;

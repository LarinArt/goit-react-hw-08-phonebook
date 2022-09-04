import { Navbar, Container, Nav } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Navbar bg="dark" variant="dark">
        <Container className=" justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/LarinArt">
                <BsGithub size={30} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                target="_blank"
                href="https://www.linkedin.com/in/larinart/"
              >
                <BsLinkedin size={30} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Footer;

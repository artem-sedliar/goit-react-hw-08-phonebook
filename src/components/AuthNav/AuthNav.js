import { Link } from 'react-router-dom';
// import s from './AuthNav.module.css';
import Nav from 'react-bootstrap/Nav';

const AuthNav = () => {
  return (
    <Nav className="me-3">
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  );


};

export default AuthNav;

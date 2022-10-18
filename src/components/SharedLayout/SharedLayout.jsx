import { Suspense } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './SharedLayout.module.css';
import Loader from '../Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <Navbar
        collapseOnSelect
        variant="dark"
        bg="primary"
        expand="lg"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Phonebook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '130px' }}
              navbarScroll
            >
              {isLoggedIn && (
                <Nav.Link as={Link} to="/contacts">
                  Contacts
                </Nav.Link>
              )}
            </Nav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );


};

export default SharedLayout;

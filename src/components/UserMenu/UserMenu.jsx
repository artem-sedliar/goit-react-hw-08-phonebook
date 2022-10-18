
import { useLogoutUserMutation } from 'redux/authApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/auth';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const UserMenu = () => {
  const { email } = useSelector(selectCurrentUser);

  const [logout] = useLogoutUserMutation();

  return (
    <Nav className="me-3">
      <Navbar.Text className="me-2">{email}</Navbar.Text>
      <Button variant="outline-light" type="button" onClick={logout}>
        Logout
      </Button>
    </Nav>
  );


};

export default UserMenu;

import s from './Phonebook.module.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth';
import { Link } from 'react-router-dom';
import UserProfile from 'components/UserProfile/UserProfile';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const phonebookImg =
  'https://t4.ftcdn.net/jpg/00/63/50/49/240_F_63504953_r3i4xVnC7YmLnAcCzI1X6FWNX6QZVPqD.jpg';

const Phonebook = () => {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.mainPage}>
      <h1 className={s.title}>Welcome to your personal phonebook!</h1>

      {!isLoggedIn && (
        <Container>
          <Row className="d-flex justify-content-center">
            <Card style={{ width: '24rem' }} className={s.card}>
              <Card.Body className="text-center">
                <Button variant="primary" className="me-3 mb-2">
                  <Card.Link
                    as={Link}
                    to="/register"
                    className="text-white text-decoration-none "
                  >
                    Register now
                  </Card.Link>
                </Button>
                <Button variant="primary" className="mb-2">
                  <Card.Link
                    as={Link}
                    to="/login"
                    className="text-white text-decoration-none "
                  >
                    Login to your account
                  </Card.Link>
                </Button>
                <Card.Img
                  variant="bottom"
                  src={phonebookImg}
                  className="mt-3 "
                  alt="phonebook"
                />
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default Phonebook;

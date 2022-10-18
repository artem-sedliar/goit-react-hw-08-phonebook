import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import s from './Register.module.css';
// import { Notify } from 'notiflix';
import { useCreateNewUserMutation } from 'redux/authApi';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUser] = useCreateNewUserMutation();

  const handleSubmit = evt => {
    evt.preventDefault();

    createUser({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.registerPage}>
      <Container>
        <Row className="justify-content-md-center">
          <Form
            onSubmit={handleSubmit}
            autocomplete="off"
            style={{ width: '33rem' }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Register
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Register;

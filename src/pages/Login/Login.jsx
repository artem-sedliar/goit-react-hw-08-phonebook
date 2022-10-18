import { useState } from 'react';
import s from './Login.module.css';

import { useLoginUserMutation } from 'redux/authApi';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginUserMutation();

  const handleSubmit = evt => {
    evt.preventDefault();

    login({ email, password });
   

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.loginPage}>
      <Container>
        <Row className="justify-content-md-center">
          <Form
            onSubmit={handleSubmit}
            
            style={{ width: '33rem' }}
          >
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
                Login
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

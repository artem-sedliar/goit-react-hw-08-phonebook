import { PropTypes } from 'prop-types';
import { useState } from 'react';
// import s from './ContactForm.module.css';
import { Notify } from 'notiflix';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { RiUserShared2Line } from 'react-icons/ri';
import { BsTelephoneForward } from 'react-icons/bs';

const ContactForm = ({ contacts, onAdd, isAdded }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddNewContact = evt => {
    evt.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return Notify.warning(`${name} is already in contacts list!`);
    } else {
      onAdd({ name, number });
      if (isAdded) {
        Notify.success(`${name} contact added successfully`);
      }
    }

    setName('');
    setNumber('');
  };

  return (
    <Form
      onSubmit={onAddNewContact}
      //! autoComplete="off"
      className="mb-3"
    >
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <RiUserShared2Line size="18px" />
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <BsTelephoneForward size="18px" />
            </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              type="tel"
              placeholder="Number"
              name="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button variant="outline-primary" type="submit" className="mb-2">
            Add contact
          </Button>
        </Col>
      </Row>
    </Form>
  );


};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  onAdd: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired,
};

export default ContactForm;

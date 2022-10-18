import { PropTypes } from 'prop-types';
import { useState } from 'react';
// import s from './UpdateForm.module.css';
import { Notify } from 'notiflix';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { RiUserShared2Line } from 'react-icons/ri';
import { BsTelephoneForward } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';

const UpdateForm = ({ onUpdate, isUpdated, setIsClicked, id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onUpdateCurrentContact = evt => {
    evt.preventDefault();

    onUpdate({ id, name, number });

    if (isUpdated) {
      Notify.success(`${name} contact updated successfully`);
    }

    setName('');
    setNumber('');
    setIsClicked(false);
  };

  return (
    <Form
      onSubmit={onUpdateCurrentContact}
      //! autoComplete="off"
    >
      <InputGroup className="mb-2">
        <InputGroup.Text>
          <RiUserShared2Line size="18px" />
        </InputGroup.Text>
        <Form.Control
          aria-label="name"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <InputGroup.Text>
          <BsTelephoneForward size="18px" />
        </InputGroup.Text>
        <Form.Control
          aria-label="number"
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button
        
          variant="outline-primary"
          type="submit"
          className="d-flex align-items-center "
        >
          <GrUpdate size="18px" />
        </Button>
      </InputGroup>
    </Form>
  );


};

UpdateForm.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default UpdateForm;

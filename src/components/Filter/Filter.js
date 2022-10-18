import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterList } from 'redux/filter';
// import s from './Filter.module.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FiFilter } from 'react-icons/fi';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  dispatch(filterList(filter));

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="filter">
        <FiFilter size="18px" />
      </InputGroup.Text>
      <Form.Control
        placeholder="Enter name to find contacts"
        aria-label="Username"
        aria-describedby="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </InputGroup>
  );


};

export default Filter;

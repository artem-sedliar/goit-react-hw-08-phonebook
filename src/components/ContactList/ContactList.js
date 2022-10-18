import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import s from './ContactList.module.css';
import { getFilterName } from 'redux/filter';
import UpdateForm from 'components/UpdateForm/UpdateForm';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import { MdOutlineContactPage } from 'react-icons/md';

const ContactList = ({ contacts, onDelete, onUpdate, isUpdated }) => {
  const filter = useSelector(getFilterName);
  const [isClicked, setIsClicked] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const onUpdateClick = id => {
    setIsClicked(true);
    setCurrentId(id);
  };

  return (
    <ListGroup variant="flush" className="border-top border-primary ">
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
            <ListGroup.Item key={id}>
              <ButtonToolbar
                className=" justify-content-between pt-2"
                aria-label="Toolbar with Button groups"
              >
                <ListGroup horizontal className="mb-2">
                  <ListGroup.Item>
                    <MdOutlineContactPage size="18px" />
                  </ListGroup.Item>
                  <ListGroup.Item>{name}</ListGroup.Item>
                  <ListGroup.Item>{number}</ListGroup.Item>
                </ListGroup>
                <ButtonGroup className=" mb-2" aria-label="First group">
                  <Button
                    variant="outline-warning"
                    type="button"
                    onClick={() => onUpdateClick(id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outline-danger"
                    type="button"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>

              {isClicked && currentId === id && (
                <UpdateForm
                  onUpdate={onUpdate}
                  isUpdated={isUpdated}
                  setIsClicked={setIsClicked}
                  id={id}
                />
              )}
            </ListGroup.Item>
          )
      )}
    </ListGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

export default ContactList;

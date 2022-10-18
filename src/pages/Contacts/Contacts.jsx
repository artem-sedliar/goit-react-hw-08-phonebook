import s from './Contacts.module.css';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsApi';

import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const Contacts = () => {
  const { data, error, isFetching, isError } = useFetchContactsQuery();
  const showContactsData = data && !isError;

  const [addContact, { isSuccess: isAdded }] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact, { isSuccess: isUpdated }] = useUpdateContactMutation();

  return (
    <div className={s.book}>
      <Container>
        <Row className="justify-content-md-center d-grid">
          <ContactForm contacts={data} onAdd={addContact} isAdded={isAdded} />

          <Filter />

          {isFetching && <Loader />}
          {isError && <b>{error.status}</b>}
          {showContactsData && (
            <ContactList
              contacts={data}
              onDelete={deleteContact}
              onUpdate={updateContact}
              isUpdated={isUpdated}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

// UpdateForm.propTypes = {
//   onUpdate: PropTypes.func.isRequired,
//   isUpdated: PropTypes.bool.isRequired,
//   setIsClicked: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default Contacts;

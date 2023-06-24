import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/oparation';


const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <div>
      <ContactForm />

      <Filter />

      <ContactList />
    </div>
  );
}

export default ContactsPage;
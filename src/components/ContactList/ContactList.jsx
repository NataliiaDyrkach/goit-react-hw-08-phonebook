import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/oparation';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { Report } from 'notiflix';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = id => {
    dispatch(deleteContact(id));
    Report.success('Сontact deleted successfully!');
  };

  const filterdContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filterdContacts();

  return (
    <ul className={css.list}>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <FaUserEdit />
            <p>{name}:</p>
            <p>{number}</p>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteSelectedContact(id)}
              id={id}
            >
              <FaTrash />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

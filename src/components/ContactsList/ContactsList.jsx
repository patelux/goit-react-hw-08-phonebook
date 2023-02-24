import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from '../../styles/Contacts.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

return (
<>
    <ul>
        {contacts.map(({ name, number, id }) => {
        return (
          <li key={name} className={css.phonebookList}>
          <span>{name}: </span>
          <span>{number} </span>
          <button className={css.btnDelete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
        })}
      </ul> 
</>

    );
};



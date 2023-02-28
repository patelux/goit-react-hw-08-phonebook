import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import css from '../../styles/Contacts.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

return (
<>
    <ul>
        {contacts.map(({ name, number, id }) => {
        return (
          <li key={name} className={css.phonebookList}>
          <span>{name}: </span>
          <span>{number} </span>
          <button className={css.btnDelete} onClick={() => handleDelete(id)}>Delete</button>
          </li>
        );
        })}
      </ul> 
</>

    );
};



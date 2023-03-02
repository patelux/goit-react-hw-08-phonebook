import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import css from '../../styles/Contacts.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();


return (
<>
    <ul>
        {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.phonebookList}>
          <span>{name}: </span>
          <span>{number} </span>
          <button className={css.btnDelete} onClick={() => {
                dispatch(deleteContact(id));
              }}>Delete</button>
          </li>
        );
        })}
      </ul> 
</>

    );
};



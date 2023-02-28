import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { addFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
import { getFilteredContacts } from 'redux/selectors';
import { PhonebookForm } from '../PhonebookForm/PhonebookForm.jsx';
import { ContactsList } from '../ContactsList/ContactsList';
import { Loader } from '../Loader/Loader';

import css from '../../styles/Contacts.module.css';

export function Contacts() {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <h2 className={css.phonebookTitle}>Phonebook</h2>
      <PhonebookForm />

      <div className={css.phonebookContactsList}>
        <h2 className={css.phonebookListTitle}>Contacts</h2>

        <div>
          <h3 className={css.filterTitle}>Filter friends</h3>
          <input
            type="text"
            name="filter"
            className={css.inputFilterForm}
            onChange={event => dispatch(addFilter(event.target.value))}
          />
        </div>
      </div>
      {(contacts.length === 0) ? (
    <p class={css.phonebookInfoMessage}>No contacts found in phonebook</p>
  ) : ( 
  <ContactsList />
  )} 
    </>
  );
}

import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

import {PhonebookForm} from '../PhonebookForm/PhonebookForm.jsx';
import {ContactsList}  from '../ContactsList/ContactsList';

import css from '../../styles/Contacts.module.css';

export function Contacts () {
const dispatch = useDispatch();
    return (
    <>
     <h2 className={css.phonebookTitle}>Phonebook</h2>
        <PhonebookForm />

        <div className={css.phonebookContactsList}>
          <h2 className={css.phonebookListTitle}>Contacts</h2>

          <div>
            <h3 className={css.filterTitle}>Filter friends</h3>
            <input type="text" name="filter" className={css.inputFilterForm} onChange={event => dispatch(addFilter(event.target.value))} />
          </div>
        </div>

        <ContactsList />
    </>
    );
}
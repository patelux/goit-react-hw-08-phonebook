import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import css from '../../styles/Contacts.module.css';

export function PhonebookForm ({ onSubmit }) {

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    const { name, value } = event.target;
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }    
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert('This friend is existed!!!!');
      return;
    }

    dispatch(addContact({ name, number }));

    resetForm();
  };

    return (
      <>
        <form onSubmit={handleSubmit} className={css.phonebookForm}>
          <h3 className={css.formTitle}>Name</h3>
          <input
            className={css.inputForm}            
            onChange={inputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3 className={css.formTitle}>Number</h3>
          <input
            className={css.inputForm}     
            onChange={inputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css.btnSubmit}>Add contact</button>
        </form>
      </>
    );
};


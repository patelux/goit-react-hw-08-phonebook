import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import storage from '../helpers/storage';

import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactsList/ContactsList';

import css from '../components/PhonebookForm/PhonebookForm.module.css';

const DEFAULTCONTACTS = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '443-89-12',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '645-17-79',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '227-91-26',
  },
];

export function App () {

const [contacts, setContacts] = useState(()=>storage.load('contacts-list') ?? DEFAULTCONTACTS);
const [filter, setFilter] = useState('');

useEffect(() => {
  storage.save('contacts-list', contacts);
}, [contacts]);

const addContact = contact => {
    const isExist = contacts.find(({ name }) => {
      return contact.name === name;
    });
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    } else {
      setContacts((prevState) => [...prevState, {...contact, id: nanoid()}]);
    }
  };
  


  const handleFilter = ({ target: { value } }) => {
    setFilter( value );
  };

  const getFilteredContacts = () => {
    const normaliseFilter = filter.trim().toLowerCase();
    return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normaliseFilter);
    });
  };

  const deleteContacts = e => {
    setContacts(prevState => prevState.filter(contact => contact.id !== e.target.id))
  };

    const filteredContacts = getFilteredContacts();

    return (
    <>
     <h2 className={css.phonebookTitle}>Phonebook</h2>
        <PhonebookForm onSubmit={addContact} />
        <div className={css.phonebookContactsList}>
          <h2 className={css.phonebookListTitle}>Contacts</h2>
          <Filter onChange={handleFilter} value={filter} />
        </div>
        {contacts.length > 0 && (
          <ContactsList
            filteredContacts={filteredContacts}
            onBtnDelete={deleteContacts}
          />
        )}
    </>
    );
}
    
import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import storage from '../helpers/storage';

import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactsList/ContactsList';

import css from '../components/PhonebookForm/PhonebookForm.module.css';

const FRIENDS = [
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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = storage.load('contacts-list') ?? FRIENDS;
    console.log(savedContacts);
    if(savedContacts){this.setState({ contacts: savedContacts });}
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save('contacts-list', contacts);
    };
  };

  addContact = contact => {
    const isExist = this.state.contacts.find(({ name }) => {
      return contact.name === name;
    });
    if (isExist) {
      alert(`Sorry, but ${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };


  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normaliseFilter = filter.trim().toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normaliseFilter);
    });
  };

  deleteContacts = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h2 className={css.phonebookTitle}>Phonebook</h2>
        <PhonebookForm onSubmit={this.addContact} />
        <div className={css.phonebookContactsList}>
          <h2 className={css.phonebookListTitle}>Contacts</h2>
          <Filter onChange={this.handleFilter} value={this.state.filter} />
        </div>
        {contacts.length > 0 && (
          <ContactsList
            filteredContacts={filteredContacts}
            onBtnDelete={this.deleteContacts}
          />
        )}
      </>
    );
  }
}

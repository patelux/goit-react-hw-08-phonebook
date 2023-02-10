import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from '../PhonebookForm/PhonebookForm';
import css from './Phonebook.module.css';


export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const isExist = this.state.contacts.find(({name}) => {
    return contact.name === name;
     })    
        if(isExist) {
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

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h2 className={css.phonebookTitle}>Phonebook</h2>
        <PhonebookForm onSubmit={this.addContact}  />
         <div className={css.phonebookContactsList}>
            <h2 className={css.phonebookListTitle}>Contacts</h2>
          <h4 className={css.filterTitle}>Find contacts by name</h4>
          <input className={css.inputFilterForm} onChange={this.handleFilter} />
        </div>

        {contacts.length > 0 && (
          <ul>
            {filteredContacts.map(({ name, number, id }) => {
              return (
                <li key={name} className={css.phonebookList}>
                  <span >{name}: </span>
                  <span>{number}</span>
                  <button className={css.btnDelete} onClick={()=> this.deleteContact(id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

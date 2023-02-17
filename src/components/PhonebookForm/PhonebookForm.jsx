import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './PhonebookForm.module.css';


export function PhonebookForm ({ onSubmit }) {

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
    onSubmit({name, number});
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


PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

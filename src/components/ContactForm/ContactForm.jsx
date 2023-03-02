import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from '../../styles/Contacts.module.css';

export function ContactForm ({ onSubmit }) {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.target;
    const contact = { name: name.value, number: number.value };
    dispatch(addContact(contact));
    e.target.reset();
  };

    return (
      <>
        <h2>Add new contact</h2>
        <form onSubmit={handleSubmit} className={css.phonebookForm}>  
          <h3 className={css.formTitle}>Name</h3>
          <input
            className={css.inputForm}            
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3 className={css.formTitle}>Number</h3>
          <input
            className={css.inputForm}     
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


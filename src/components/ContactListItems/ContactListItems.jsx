import PropTypes from 'prop-types';
import css from './ContactListItems.module.css';

export function ContactListItem({ name, number, onBtnDelete, btnId }) {
  return (
    <li key={name} className={css.phonebookList}>
    <span >{name}: </span>
    <span>{number} </span>
    <button className={css.btnDelete} id={btnId} onClick={onBtnDelete}>Delete</button>
    </li>
);
}

ContactListItem.propTypes = {
  btnId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onBtnDelete: PropTypes.func.isRequired,
};
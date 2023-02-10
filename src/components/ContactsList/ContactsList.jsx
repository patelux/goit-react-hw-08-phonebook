import { ContactListItem } from '../ContactListItems/ContactListItems';
import PropTypes from 'prop-types';

export function ContactsList({ filteredContacts, onBtnDelete }) {
  return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
        return <ContactListItem
        key={id}
        name={name}
        number={number}
        onBtnDelete={onBtnDelete}
        btnId={id}
        />
        })}
      </ul>
    )}


ContactsList.propTypes = {
  onBtnDelete: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
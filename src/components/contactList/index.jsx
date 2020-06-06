import React from './node_modules/react';
import propTypes from './node_modules/prop-types';
import './styles.scss';
const ContactList = ({ onHandleDeleteContact, onFilteredContacts }) => (
  <ul className="contactList">
    {onFilteredContacts.map(contact => (
      <li className="contactListItem" key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button
          className="contactListButton"
          onClick={() => onHandleDeleteContact(contact.id)}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onHandleDeleteContact: propTypes.func.isRequired,
  onFilteredContacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
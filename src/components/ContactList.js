import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  return (
    <div className="main" style={{ padding: "4rem" }}>
      <h2 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        Contact List
        <Link to="/add">
          <button className="ui button blue">Add Contact</button>
        </Link>
      </h2>

      <div className="ui celled list">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              clickHandler={deleteContactHandler}
            />
          ))
        ) : (
          <p>No contacts available. Click “Add Contact” above to get started.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;

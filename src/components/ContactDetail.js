import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userPlaceholder from "../images/user.jpg"; // fallback avatar

const ContactDetail = ({ contacts }) => {
  console.log(contacts);
  const { id } = useParams();               // grab the :id from the URL
  const [contact, setContact] = useState();

  useEffect(() => {
    // find the contact whose id matches the URL param
    const found = contacts.find(c => c.id === id);
    setContact(found);
  }, [id, contacts]);

  // while loading or if not found
  if (!contact) {
    return (
      <div className="main">
        <p>Contact not found.</p>
        <Link to="/">← Back to Contact List</Link>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
            <div style={{ marginTop: "6rem" }}></div>
          <img src={userPlaceholder} alt={contact.name} />
          
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/">← Back to Contact List</Link>
      </div>
    </div>
  );
};

export default ContactDetail;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely grab the contact object (might be undefined)
  const existingContact = location.state?.contact;

  // If someone lands here without state, send them back to "/"
  useEffect(() => {
    if (!existingContact) {
      navigate("/", { replace: true });
    }
  }, [existingContact, navigate]);

  // Initialize form with either the passed contact or empty defaults
  const [contact, setContact] = useState(
    existingContact || { id: "", name: "", email: "" }
  );

  const update = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler(contact);
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;

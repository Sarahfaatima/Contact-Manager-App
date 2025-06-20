import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import api from '../api/contacts';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);   // appends the new contact to the previous ones
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Load from local storage once on mount
  useEffect(() => {
  // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // if (retrievedContacts && retrievedContacts.length > 0) {
  //   setContacts(retrievedContacts);
  // }


  //fetching the data from the server not from the local storage
  const getAllContacts = async () => {
    const allContacts = await retrieveContacts();
    if(allContacts) setContacts(allContacts);
  };

  getAllContacts();
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);



  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />

        <Route
  path="/contact/:id"
  element={<ContactDetail contacts={contacts} />}
/>
        </Routes>
      </Router>
    </div>
  );  
}

export default App;

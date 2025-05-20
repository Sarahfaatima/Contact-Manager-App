import React, { useState, useEffect } from 'react';
import { BrowserRouter as  Router, Routes, Switch, Route } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY= "contacts";
  const [contacts, setContacts] = useState([]);  //internally manages the state and re-renders your component whenever you call setContacts(...).
  
  const addContactHandler =(contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact}]); //Adds new contacts with their unique IDs to contacts array
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {  //Copying the contacts and then filtering it out with individual contact
      return contact.id !== id;
    });

    setContacts(newContactList);  //changing the contacts state
  };

  useEffect(() =>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));  //taking the data from local storage and storing as variable
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))  //adding in localStorage
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
    </Router>
      </div>
      
  );
}

export default App;

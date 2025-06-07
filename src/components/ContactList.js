import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log("ContactList Props:", props);


        const deleteContactHandler = (id) => {
            props.getContactId(id); //it will get the id from the deleteContactHandler
        };

    // const contacts= [
    //     {
    //         id: "1",
    //         "name": "Pakku",
    //         "email": "pakku@gmail.com",
    //     },
    //     {
    //         id: "2",
    //         name: "Sarro",
    //         email: "Saru@gmail.com",
    //     },
    //     {
    //         id: "3",
    //         name: " Yesu",
    //         email: "Yesu@gmail.com",
    //     },
    //     {
    //         id: "4",
    //         name: "Siddhu",
    //         email: "Siddhu@gmail.com",
    //     }
    // ]
    const renderContactList = props.contacts.length > 0 ? (
  props.contacts.map((contact) => (
    <ContactCard 
      contact={contact} 
      clickHandler={deleteContactHandler}
      key={contact.id} 
    />
  ))
) : (
  <p>No contacts available.</p>
);


    return (
  <div className="main">
    <h2>
      Contact List
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
    </h2>
    <div className="ui celled list">{renderContactList}</div>
  </div>
);

    
};

export default ContactList; 
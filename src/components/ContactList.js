import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

        const deleteContactHandler = (id) => {
            props.getContactId(id); //it will get the id from the deleteContactHandler
        };

    const contacts= [
        {
            id: "1",
            "name": "Pakku",
            "email": "pakku@gmail.com",
        },
        {
            id: "2",
            name: "Sarro",
            email: "Saru@gmail.com",
        },
        {
            id: "3",
            name: " Yesu",
            email: "Yesu@gmail.com",
        },
        {
            id: "4",
            name: "Siddhu",
            email: "Siddhu@gmail.com",
        }
    ]
    const renderContactList = contacts.map((contact) => {
        return( 
        <ContactCard 
            contact={contact} 
            clickHandler ={deleteContactHandler }
            key={contact.id} 
        /> //passing the clickHandler from the inner child to its parent and then from parent to its parent (i.e., the contact card will give the id to the contactList and then from contactList to App.js)   
        );
        
    });

    return (
        <div class="main">
            <h2>
                Contact List
                <Link to="/add">
                <button className="ui button blue right">Add Contact</button></Link>
                
            </h2>
            <div className="ui celled list">{renderContactList}</div>

        </div>
    );
    
};

export default ContactList; 
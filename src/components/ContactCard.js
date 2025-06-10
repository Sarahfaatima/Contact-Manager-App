import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt={name} />

      <div className="content">
        <Link to={{pathname:`/contact/${id}`,state: {contact:contact}}} style={{ color: "inherit", textDecoration: "none" }} >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
        onClick={() => clickHandler(id)}
      />
    </div>
  );
};

export default ContactCard;

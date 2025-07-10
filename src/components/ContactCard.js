import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt={name} />

      {/* Detail link wraps only the name/email */}
      <div className="content">
        <Link
          to={`/contact/${id}`}
          state={{ contact }}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      {/* Delete icon */}
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => clickHandler(id)}
      />

      {/* Edit icon: its own Link, passing state properly */}
      <Link to="/edit" state={{ contact }}>
        <i
          className="edit alternate outline icon"
          style={{
            color: "blue",
            marginTop: "7px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        />
      </Link>
    </div>
  );
};

export default ContactCard;

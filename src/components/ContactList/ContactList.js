import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

function ContactList({ filtered, deleteContact }) {
  return (
    <ul className={styles.contacts}>
      {filtered().map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={styles.btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
        
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filtered: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default ContactList;

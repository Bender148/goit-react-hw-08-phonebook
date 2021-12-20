import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ filter, filterUpdate }) => {
  return (
    <div className={styles.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => filterUpdate(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterUpdate: PropTypes.func.isRequired,
};

export default Filter;

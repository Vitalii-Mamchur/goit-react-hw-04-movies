import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./filmsList.module.css";

const FilmsList = ({ films, location }) => {
  return (
    <ul className={styles.HomePage}>
      {films.map(({ id, title }) => (
        <li key={id} className={styles.HomePage__item}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default withRouter(FilmsList);

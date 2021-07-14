import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const FilmsList = ({ films, location }) => {
  return (
    <ul>
      {films &&
        films.map(({ id, title }) => (
          <li key={id}>
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

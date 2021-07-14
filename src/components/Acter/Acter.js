import React from "react";
import PropTypes from "prop-types";
import styles from "./Acter.module.css";

const Acter = ({ name, character, photo }) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={styles.acter}>
      {photo ? (
        <img
          className={styles.acterPhoto}
          src={`${baseImgURL}${photo}`}
          alt={name}
          width={250}
        ></img>
      ) : (
        <img
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4QwEbxykmVJXnG52vFdJarRhXRRBkbTiCg&usqp=CAU/`}
          alt={name}
          width={250}
        ></img>
      )}
      <div className={styles.acterInfo}>
        <h3>{name}</h3>
        <p>{`Character: ${character}`}</p>
      </div>
    </div>
  );
};

Acter.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  src: PropTypes.string,
};

export default Acter;

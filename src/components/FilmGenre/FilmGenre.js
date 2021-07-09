import React from "react";

const FilmGenre = ({ id, filmGenre }) => {
  return (
    <li key={id} className="">
      {filmGenre}
    </li>
  );
};

export default FilmGenre;

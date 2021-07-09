import React from "react";

const Acter = ({ acterId, name, character, photo }) => {
  const baseImgURL = "https://image.tmdb.org/t/p/w500";
  return (
    <li className="" key={acterId}>
      {photo && <img src={`${baseImgURL}${photo}`} alt={name} width={250} />}
      <h3>{name}</h3>
      <p>{`Character: ${character}`}</p>
    </li>
  );
};

export default Acter;

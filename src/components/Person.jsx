import React from "react";

const Person = ({ image, firstName, email }) => {
  return (
    <div className="personContainer">
      <img src={image} alt="img" className="PersonImages" />
      <h2 className="personFirstNames">{firstName}</h2>
      <p className="personEmails">{email}</p>
    </div>
  );
};

export default Person;

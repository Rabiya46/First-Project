import React from "react";
import users from "../constants";
import Person from "./Person";

const PeopleInfo = () => {
  return (
    <div className="container">
      {users.map((el) => {
        return (
          <div
            className="users"
            key={el.id}
            onClick={() => alert("ID: " + el.id)}
          >
            <Person
              image={el.image}
              firstName={el.firstName}
              email={el.email}
            />
          </div>
        );
      })}
      ;
    </div>
  );
};

export default PeopleInfo;

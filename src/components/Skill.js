import React from "react";

function Skill({ icon, name }) {
  return (
    <span className="skill">
      <img className="skill__icon" src={icon} alt={`${name} icon`} />
      <h4 className="skill__title">{name}</h4>
    </span>
  );
}

export default Skill;

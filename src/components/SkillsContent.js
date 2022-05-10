import React from "react";
import Skill from "./Skill";

function Skills_content({ arr }) {
  return (
    <div className="skills__content">
      {arr.map(({ name, icon }) => (
        <Skill name={name} icon={icon} key={name} />
      ))}
    </div>
  );
}

export default Skills_content;

import React from "react";
import SkillBadge from "./SkillBadge";


const SkillList = ({ skills }) => {
  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  );
}

export default SkillList;
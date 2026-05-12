import React from "react";

const SkillBadge = ({ skill }) => {
  const highLevel = skill.level >= 90;

  return (
    <div>
      <span>{skill.name} : </span>
      <span>{skill.level}</span>
        {highLevel ? <span>⭐⭐</span> : <span>⭐</span>}
    </div>
  );
}

export default SkillBadge;
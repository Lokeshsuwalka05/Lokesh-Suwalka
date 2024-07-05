import React from "react";

function SkillList({ src, Skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark Icon" />
      <p>{Skill}</p>
    </span>
  );
}

export default SkillList;

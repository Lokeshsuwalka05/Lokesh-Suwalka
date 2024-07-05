import styles from "./SkillsStyles.module.css";
import checkMarklight from "../../assets/checkmark-light.svg";
import checkMarkdark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarklight : checkMarkdark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} Skill="HTML"></SkillList>
        <SkillList src={checkMarkIcon} Skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} Skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} Skill="Node"></SkillList>
        <SkillList src={checkMarkIcon} Skill="Express"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} Skill="C"></SkillList>
        <SkillList src={checkMarkIcon} Skill="C++"></SkillList>
        <SkillList src={checkMarkIcon} Skill="SQL"></SkillList>
        <SkillList src={checkMarkIcon} Skill="React"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} Skill="Git"></SkillList>
        <SkillList src={checkMarkIcon} Skill="GitHub"></SkillList>
        <SkillList src={checkMarkIcon} Skill="Postman"></SkillList>
        <SkillList src={checkMarkIcon} Skill="MongoDB"></SkillList>
        <SkillList src={checkMarkIcon} Skill="MySql"></SkillList>
      </div>
    </section>
  );
}

export default Skills;

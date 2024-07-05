import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import checkList from "../../assets/check-list.png";
import CourseSellingWeb from "../../assets/courseSellingWeb.png";
import WeatherAppLogo from "../../assets/WeatherLogo.png";
import futureTechLogo from "../../assets/futureTechLogo.png";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.Projectscontainer}>
        <ProjectCard
          src={checkList}
          link="https://github.com/Lokeshsuwalka05/A_simple_To_Do_App"
          h3="CheckList"
          p="A To Do App"
        ></ProjectCard>
        <ProjectCard
          src={CourseSellingWeb}
          link="https://github.com/Lokeshsuwalka05/Backend_of_course_sellling_website"
          h3="LearnVerse"
          p="A Course Selling Web App"
        ></ProjectCard>
        <ProjectCard
          src={WeatherAppLogo}
          link="https://github.com/Lokeshsuwalka05/weather-app"
          h3="SkyPredictor"
          p="A Weather App"
        ></ProjectCard>
        <ProjectCard
          src={futureTechLogo}
          link="https://github.com/Lokeshsuwalka05/techHorizon"
          h3="TechHorizon"
          p="A Dynamic WebPage"
        ></ProjectCard>
      </div>
    </section>
  );
}
export default Projects;

import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInDark from "../../assets/linkedin-Light.svg";
import linkedInLight from "../../assets/linkedin-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import LeetcodeDark from "../../assets/LeetcodeDark.svg";
import LeetcodeLight from "../../assets/LeetCodeLight.svg";

import cv from "../../assets/cv.pdf";

import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const LinkedIcon = theme === "light" ? linkedInLight : linkedInDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const LeetcodeIcon = theme === "light" ? LeetcodeLight : LeetcodeDark;

  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={HeroImg}
          alt="Profile picture of Lokesh Suwalka"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="colorModeIcon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.Info}>
        <h1>
          Lokesh <br />
          suwalka
        </h1>
        <h2>Software developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/lokesh-suwalka-899365241/"
            target="_blank"
          >
            <img src={LinkedIcon} alt="Linkedin icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Lokeshsuwalka05" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://leetcode.com/u/LUCKY2002_05/" target="_blank">
            <img src={LeetcodeIcon} alt="Leetcode Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about problem-solving and new technology, seeking an SDE
          role.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

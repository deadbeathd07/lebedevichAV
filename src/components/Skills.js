import React from "react";
import { FormattedMessage } from "react-intl";
import Container from "./Container";
import SkillsContent from "./SkillsContent";
import jsIcon from "../img/js-icon.png";
import reactIcon from "../img/react-icon.png";
import htmlIcon from "../img/html-5-icon.png";
import cssIcon from "../img/css-icon.png";
import sassIcon from "../img/sass-icon.png";
import gulpIcon from "../img/gulp-icon.svg";
import webpackIcon from "../img/webpack-icon.png";
import gitIcon from "../img/git-icon.png";
import psIcon from "../img/ps-icon.svg";
import figmaIcon from "../img/figma-icon.svg";
import aiIcon from "../img/ai-icon.svg";

function Skills() {
  const skills_arr = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Sass", icon: sassIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React.js", icon: reactIcon },
    { name: "Gulp", icon: gulpIcon },
    { name: "Webpack", icon: webpackIcon },
    { name: "Git", icon: gitIcon },
    { name: "Adobe Photoshop", icon: psIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Adobe Illustrate", icon: aiIcon },
  ];
  return (
    <section className="skills">
      <Container>
        <div className="skills__inner">
          <h3 className="skills__title" id="section3">
            <FormattedMessage id="skills_title" />
          </h3>
          <p className="skills__information">
            <FormattedMessage id="skills" />
          </p>
          <SkillsContent arr={skills_arr} />
        </div>
      </Container>
    </section>
  );
}

export default Skills;

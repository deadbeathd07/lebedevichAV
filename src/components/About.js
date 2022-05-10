import React from "react";
import { FormattedMessage } from "react-intl";
import Container from "./Container";

function About() {
  return (
    <section className="about">
      <Container>
        <div className="about__inner">
          <div className="about__content">
            <h3 className="about__title" id="section2">
              <FormattedMessage id="about_title" />
            </h3>
            <p className="about__information">
              <FormattedMessage id="about" />
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;

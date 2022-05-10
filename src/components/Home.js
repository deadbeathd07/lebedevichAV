import React from "react";
import { FormattedMessage } from "react-intl";
import Container from "./Container";
import LanguageTumbler from "./LanguageTumbler";

function Home({ handleClick, isMobile, languages }) {
  return (
    <section className="home">
      <Container>
        <div className="home__inner">
          <div className="home__discription">
            <h1 id="section1" className="home__title">
              <FormattedMessage id="name" />
            </h1>
            <p className="home__information">
              <FormattedMessage id="information" />
            </p>
            {!isMobile && (
              <LanguageTumbler
                arr={languages}
                handleFunc={handleClick}
                className="home__language"
              />
            )}
          </div>
          <div className="home__img" />
        </div>
      </Container>
    </section>
  );
}

export default Home;

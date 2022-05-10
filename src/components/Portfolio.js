import React from "react";
import { FormattedMessage } from "react-intl";
import Container from "./Container";
import PortfolioList from "./PortfolioList";

function Portfolio() {
  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio__inner">
          <div className="portfolio__content">
            <h3 className="portfolio__title" id="section4">
              <FormattedMessage id="portfolio_title" />
            </h3>
          </div>
          <PortfolioList />
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;

import React from "react";
import { FormattedMessage } from "react-intl";

function PortfolioItem({ img, link, linkText }) {
  return (
    <div className="portfolio__item">
      <img className="portfolio__item-img" src={img} alt="Portfolio Item" />
      <a className="portfolio__item-link" href={link}>
        <FormattedMessage id={linkText} />
      </a>
    </div>
  );
}

export default PortfolioItem;

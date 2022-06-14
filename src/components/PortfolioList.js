import React from "react";
import paralect from "../img/paralect-test.png";
import engDiag from "../img/eng-diag.png";
import royal from "../img/royal-feast.png";
import quize from "../img/quize.png";
import notes from "../img/notes.png";
import PortfolioItem from "./PortfolioItem";

function PortfolioList() {
  const list = [
    {
      img: paralect,
      link: "https://deadbeathd07.github.io/paralect-test/",
      key: "example_1",
    },
    {
      img: engDiag,
      link: "https://deadbeathd07.github.io/eng_diag/",
      key: "example_2",
    },
    {
      img: royal,
      link: "https://deadbeathd07.github.io/royal_feast/",
      key: "example_3",
    },
    {
      img: quize,
      link: "https://deadbeathd07.github.io/quize/",
      key: "example_4",
    },
    {
      img: notes,
      link: "https://musical-rugelach-61598f.netlify.app/",
      key: "example_5",
    },
  ];
  return (
    <div className="portfolio__list">
      {list.map(({ img, link, key }) => (
        <PortfolioItem img={img} link={link} linkText={key} key={key} />
      ))}
    </div>
  );
}

export default PortfolioList;

import React from "react";
import { FormattedMessage } from "react-intl";
import { MENU } from "../initialDate";

function Nav() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {MENU.map(({ key, title, path }) => (
          <li key={title} className="navigation__item">
            <a href={path} className="navigation__link">
              <FormattedMessage id={key} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

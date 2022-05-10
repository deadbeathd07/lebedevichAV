import React from "react";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MENU } from "../initialDate";
import { FormattedMessage } from "react-intl";
import LanguageTumbler from "./LanguageTumbler";

function AsideMenu({ handleClick, onClick, languages }) {
  return (
    <aside className="aside-menu">
      <IconContext.Provider
        value={{ size: "3rem", className: "aside-menu__icon" }}
      >
        <IoClose onClick={onClick} />
      </IconContext.Provider>
      <nav className="aside-menu__nav">
        <ul className="aside-menu__list">
          {MENU.map(({ key, title, path }) => (
            <li key={title} className="aside-menu__item">
              <a href={path} className="aside-menu__link">
                <FormattedMessage id={key} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageTumbler
        arr={languages}
        handleFunc={handleClick}
        className="aside-menu__language"
      />
    </aside>
  );
}

export default AsideMenu;

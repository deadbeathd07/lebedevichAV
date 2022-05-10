import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IconContext } from "react-icons";
import AsideMenu from "./AsideMenu";

function NavMob({ languages, handleClick }) {
  const [isActive, setIsActive] = useState(false);

  function onClick() {
    setIsActive(!isActive);
  }
  return (
    <>
      {isActive ? (
        <AsideMenu
          languages={languages}
          handleClick={handleClick}
          onClick={onClick}
        />
      ) : (
        <IconContext.Provider
          value={{ size: "3rem", className: "navigation__bar" }}
        >
          <div>
            <CgMenu onClick={onClick} />
          </div>
        </IconContext.Provider>
      )}
    </>
  );
}

export default NavMob;

import Wrapper from "./Wrapper";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Home from "./Home";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { useEffect, useState } from "react";
import { LOCALES } from "../i18n/locales";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import NavMob from "./NavMob";

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [isMobile, setIsMobile] = useState(false);

  const languages = [
    { name: "RU", code: LOCALES.RUSSIAN },
    { name: "ENG", code: LOCALES.ENGLISH },
  ];

  function resize() {
    window.innerWidth <= 640 ? setIsMobile(true) : setIsMobile(false);
  }
  function handleClick({ target: { value, classList } }) {
    setCurrentLocale(value);
    localStorage.setItem("locale", value);
    cleanClass();
    classList.toggle("home__language-btn_active");
  }
  function getInitialLocale() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.RUSSIAN;
  }
  function cleanClass() {
    document
      .querySelectorAll(".home__language-btn")
      .forEach((elem) => elem.classList.remove("home__language-btn_active"));
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
  });

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <Wrapper>
        <Header>
          {isMobile ? (
            <NavMob handleClick={handleClick} languages={languages} />
          ) : (
            <Nav />
          )}
        </Header>
        <Main>
          <Home
            handleClick={handleClick}
            isMobile={isMobile}
            languages={languages}
          />
          <About />
          <Skills />
          <Portfolio />
          <Contacts />
        </Main>
      </Wrapper>
    </IntlProvider>
  );
}

export default App;

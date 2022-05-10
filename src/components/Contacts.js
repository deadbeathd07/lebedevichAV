import React from "react";
import { FormattedMessage } from "react-intl";
import Container from "./Container";
import { FaTelegram } from "react-icons/fa";
import { IconContext } from "react-icons";

function Contacts() {
  return (
    <section className="contacts">
      <Container>
        <div className="contacts__inner">
          <h3 className="contacts__title" id="section5">
            <FormattedMessage id="contacts_title" />
          </h3>
          <p className="contacts__information">
            <FormattedMessage id="contacts" />
          </p>
          <div className="contacts__messangers">
            <IconContext.Provider value={{ className: "contacts__messanger" }}>
              <a
                className="contacts__messanger-link"
                href="https://t.me/anastasiya_lebedevich"
              >
                <FaTelegram />
              </a>
            </IconContext.Provider>
          </div>
          <a
            className="contacts__link"
            href="https://rabota.by/resume/10922d7fff099aef4d0039ed1f513536306676"
          >
            <FormattedMessage id="rabota_by_link" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;

import { LOCALES } from "./locales";
import { differenceInYears } from "date-fns";

const years_old = differenceInYears(new Date(), new Date(1994, 0, 14));

export const messages = {
  [LOCALES.ENGLISH]: {
    home_title: "Home",
    about_title: "About me",
    skills_title: "Skills",
    portfolio_title: "Portfolio",
    contacts_title: "Contacts",
    name: "Anastasiya Lebedevich",
    information: `Frontend developer ${years_old} years old, Minsk`,
    about:
      "Hi, I'm Nastya - Frontend developer from Minsk. I'm intrested in Java Script and everything connected with it. I prefer to work with the library React.js and studying other libraries  that facilitate development. I have completed the It Shuttle: Frontend (JS + React) courses. I am ready to work in a good team on interesting projects.",
    skills: "I work with",
    example_1: "Searching GitHub accaunts",
    example_2: "Several sections of the site Engineering Diagnostics",
    example_3: "The Royal Feast - The Game",
    example_4: "Quize",
    contacts: "Want to know more or just chat? You are welcome!",
    rabota_by_link: "Portfolio on the rabota.by",
  },
  [LOCALES.RUSSIAN]: {
    home_title: "Главная",
    about_title: "Обо мне",
    skills_title: "Навыки",
    portfolio_title: "Портфолио",
    contacts_title: "Контакты",
    name: "Анастасия Лебедевич",
    information: `Frontend разработчик ${years_old} лет, Минск`,
    about:
      "Привет, Меня зовут Настя - Frontend разработчик из Минска. Я интересуюсь Java Script и всем, что с ним связано. Предпочитаю работать с библиотекой React.js и другими библиотеками, которые упрощают разработку. Закончила курсы в  It Shuttle: Frontend (JS + React). Готова к работе с хорошей командой над интересными пректами.",
    skills: "Я работаю с",
    example_1: "Поиск аккаунтов GitHub",
    example_2: "Несколько разделов сайта Инженерная Диагностика",
    example_3: "The Royal Feast - Игра",
    example_4: "Викторина",
    contacts: "Хотите узнать больше или просто поболтать? Добро пожаловать!",
    rabota_by_link: "Портфолио на rabota.by",
  },
};

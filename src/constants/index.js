import vk from "../assets/vk.png";
import te from "../assets/te.png";

export const features = [
  {
    id: "feature-1",
    linkTo: "https://start.cloveri.com/project/kadrovoe-agentstvo/",
    title: "Кадровое агентство",
    content: "Портал для работы с вакансиями и кандидатами",
    info: "Прием заявок завершен",
  },
  {
    id: "feature-2",
    linkTo: "https://start.cloveri.com/project/links/",
    title: "Короткие ссылки",
    content: "Сервис укорачивания ссылок и сбора аналитики о кликах",
    info: "Прием заявок завершен",
  },
  {
    id: "feature-3",
    linkTo: "https://start.cloveri.com/project/raida/",
    title: "Райда",
    content: "Платформа для управления процессами",
    info: "Прием заявок завершен",
  },
  {
    id: "feature-4",
    linkTo: "https://start.cloveri.com/project/notepad/",
    title: "Записная книжка",
    content: "Управление нетворком человека или организации",
    info: "Прием заявок завершен",
  },
  {
    id: "feature-5",
    linkTo: "https://start.cloveri.com/project/portfolio/",
    title: "Портфолио проектов",
    content: "Управление списком проектов и стажировок",
    info: "Прием заявок завершен",
  },
];

export const footerLinksLeft = [
  {
    id: "footerLink-1",
    name: "Проекты",
    link: "https://start.cloveri.com/projects/",
  },
  {
    id: "footerLink-2",
    name: "Цифровой паспорт",
    link: "https://cloveri.com/howto/skillpassport",
  },
  {
    id: "footerLink-3",
    name: "Личный кабинет",
    link: "https://p.cloveri.com/register/",
  },
];

export const footerLinksRight = [
  {
    id: "footerLink-4",
    name: "Контакты",
    link: "https://cloveri.com/company/contacts/",
  },
  {
    id: "footerLink-5",
    name: "Статьи",
    link: "https://t.me/cloveri",
  },
  {
    id: "footerLink-6",
    name: "Лицензионное соглашение",
    link: "https://cloveri.com/legal/eula",
  },
  {
    id: "footerLink-7",
    name: "Персональные данные",
    link: "https://cloveri.com/legal/privacy",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: vk,
    link: "https://vk.com/cloveri",
  },
  {
    id: "social-media-2",
    icon: te,
    link: "https://t.me/cloveri_start",
  },
];

export const getYear = new Date().getFullYear();

import { letterSpacing } from "styled-system";

type BaseFonts = {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontStyle?: string;
  textDecoration?: string;
  textTransform?: string;
  fontFamily?: string;
  mobileSize?: string;
  mobileLineHeight?: string;
};

const h1 = {
  fontWeight: 700,
  fontSize: "6.5rem",
  lineHeight: "26rem",
  mobileSize: "2.6rem",
  mobileLineHeight: "3.4rem",
  fontFamily: "RocGrotesk",
};

const title = {
  fontWeight: 700,
  fontSize: "6.5rem",
  lineHeight: "26rem",
  mobileSize: "2rem",
  mobileLineHeight: "7.5rem",
  fontFamily: "RocGrotesk",
};


const h2 = {
  fontWeight: 500,
  fontSize: "5.2rem",
  lineHeight: "4rem",
  mobileSize: "2.6rem",
  mobileLineHeight: "4rem",
  fontFamily: "RocGrotesk",
};

const h3 = {
  fontWeight: 500,
  fontSize: "4.8rem",
  lineHeight: "4rem",
  mobileSize: "2rem",
  mobileLineHeight: "3.4rem",
  fontFamily: "RocGrotesk",
};

const p = {
  fontWeight: 600,
  fontSize: "2.8rem",
  lineHeight: "4rem",
  mobileSize: "1.8rem",
  mobileLineHeight: "2.2rem",
};

const bodyText = {
  fontWeight: 500,
  fontSize: "2.4rem",
  lineHeight: "4rem",
  mobileSize: "1.6rem",
  mobileLineHeight: "2rem",
  fontFamily: "Articulat.CF",
};

const bodyTextSecondary = {
   ...bodyText,
   mobileSize: "1.8rem",
   fontSize: "2.8rem",
  mobileLineHeight: "2.2rem",
};


const subtitle = {
  fontWeight: 700,
  fontSize: "3rem",
  lineHeight: "4rem",
  mobileSize: "1.152rem",
  mobileLineHeight: "1.536rem",
  fontFamily: "RocGrotesk",
};

const emailInfo = {
  fontWeight: 500,
  fontSize: "1.9rem",
  lineHeight: "4rem",
  letterSpacing: "0.05em",
  fontFamily: "RocGrotesk",
  mobileSize: "1.4rem",
  mobileLineHeight: "4rem",
};

const linkText = {
  fontSize: "1.6rem",
  lineHeight: "4rem",
  fontWeight: 700,
  fontFamily: "Articulat.CF",
  letterSpacing: "0.5em",
};

const buttonTextSecondary = {
  fontSize: "1.9rem",
  lineHeight: "4rem",
  fontWeight: 500,
  fontFamily: "RocGrotesk",
  mobileSize: ".6rem",
  mobileLineHeight: "1.2rem",
  letterSpacing: "0.05em"
};

const faqQuestion = {
  fontSize: "1.8rem",
  lineHeight: "2rem",
  fontWeight: 400,
  mobileSize: ".691rem",
  mobileLineHeight: ".787rem",
  fontFamily: "RocGrotesk",
};

const smallText = {
  ...faqQuestion,
  fontWeight: 700,
};

const buyTicket = {
  fontSize: "2.5rem",
  lineHeight: "4rem",
  fontWeight: 400,
  fontFamily: "RocGrotesk",
  mobileSize: ".8rem",
  mobileLineHeight: "1.2rem",
};


const embedText = {
  fontSize: "1.6rem",
  lineHeight: "2.5rem",
  fontWeight: 400,
  fontFamily: "RocGrotesk",
  mobileSize: ".6rem",
  mobileLineHeight: ".725rem",
};

const faqAnswer = {
  fontSize: "1.6rem",
  lineHeight: "2.5rem",
  fontWeight: 400,
  mobileSize: ".614rem",
  mobileLineHeight: ".96rem",
  fontFamily: "Articulat.CF",
};

const footerText = {
  fontSize: "1.2rem",
  lineHeight: "1.6rem",
  fontWeight: 400,
  fontFamily: "RocGrotesk",
  mobileSize: ".355rem",
  mobileLineHeight: ".488rem",
};

let typography: {
  [key: string]: BaseFonts;
} = {};

typography = {
  h1,
  h2,
  p,
  linkText,
  buyTicket,
  bodyText,
  smallText,
  subtitle,
  emailInfo,
  faqQuestion,
  faqAnswer,
  h3,
  title,
  footerText,
  bodyTextSecondary,
  buttonTextSecondary,
  embedText
};

export default typography;

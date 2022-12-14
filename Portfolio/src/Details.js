// Logo images

import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

// Profile Image

import profile from "./assets/profile.jpeg";

// Tech stack images

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import Next from './assets/techstack/NextLogo.png';
import Node from './assets/techstack/Node.png';
import Ts from './assets/techstack/Ts.png';
import Sql from './assets/techstack/Sql.png';
import Mongo from './assets/techstack/MongoDB.png'

// Project Images

import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

//  Personal Details 
export const personalDetails = {
  name: "Santiago Dabbene",
  tagline: "FullStack Web Developer",
  img: profile,
  about: `Just graduated from Henry Full Stack Bootcamp, looking for a company that allows me to develop as a professional and increase my skills and knowledge. Currently working in a company that does small improvement or solution projects for others.`,
};

//  Social Media URLs 
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/santiago-dabbene-2a4309242/",
  github: "https://github.com/Syrident23",
  twitter: "https://twitter.com/Santidabbeneok",
  instagram: "https://www.instagram.com/santidabbene20/",
};

//  Work Experience 
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `PECF`,
    Location: "C??rdoba, Argentina",
    Type: "Full Time",
    Duration: "Oct 2022 - Present",
  },
  
];

//  Education Details 
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Henry, YouTube, Google",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Nov 2022",
  },
  
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  Next:Next,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  Node: Node,
  Ts: Ts,
  Sql: Sql,
  Mongo: Mongo,
};

//  Project Details 
export const projectDetails = [
  {
    title: "E-Comerce",
    image: projectImage1,
    description: `E-commerce template with administrator system, designed to be adaptable to any company `,
    techstack: "TypeScript ,React, Redux, Node, MongoDb",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
 
];

//  Contact Details here
export const contactDetails = {
  email: "santiagodabbene@gmail.com",
  phone: "+54 3533 457744",
};

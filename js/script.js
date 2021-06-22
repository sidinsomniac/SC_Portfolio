import projectData from "../assets/data/project-data.js";
import addStars from "./helperFunc/twinkle.js";
import { addEffect } from "./helperFunc/hamburger.js";
import { appendProjects } from "./helperFunc/projects.js";

const links = document.querySelectorAll('#navbar_links a');
const heroBg = document.querySelector('.hero-bg');
const hamburger = document.querySelector('#hamburger');
const projectWorkLayer = document.querySelector('#project_work');

init();

function init() {
    addStars(heroBg);
    addEffect(hamburger, links);
    appendProjects(projectWorkLayer, projectData);
}
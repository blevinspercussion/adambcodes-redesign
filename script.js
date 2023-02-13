//////////////////////////////////////////////
// Define custom elements/web components /////
//////////////////////////////////////////////

class DesktopHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header id="desktop-header">
    <a href="./index.html"><img class="logo" src="./media/images/AdamBCodesLogo.png" alt="" /></a>
    <ul class="menu-hor">
      <div id="project-menu-container">
        <li id="projects-menu-item" class="menu-item"><a href="./index.html#webdev-projects">Projects</a></li>
        <ul id="projects-menu" class="projects-menu-hidden">
          <li class="projects-menu-item"><a href="./index.html#webdev-projects">Web Development Projects</a></li>
          <li class="projects-menu-item"><a href="./index.html#coding-projects">Coding Projects</a></li>
          <li class="projects-menu-item"><a href="./index.html#other-projects">Other Projects</a></li>
        </ul>
      </div>
      <div id="tutoring-menu-container">
        <li id="tutoring-menu-item" class="menu-item"><a href="./tutoring.html">Tutoring</a></li>
        <ul id="tutoring-menu" class="tutoring-menu-hidden">
          <li class="tutoring-menu-item"><a href="./tutoring.html#beginner-coding">Beginner Coding</a></li>
          <li class="tutoring-menu-item"><a href="./tutoring.html#intermediate-coding">Intermediate Coding</a></li>
          <li class="tutoring-menu-item"><a href="./tutoring.html#advanced-coding">Advanced Coding</a></li>
        </ul>
      </div>
      <li id="about-menu-item">><a href="./about.html">About Me</a></li>
      <li id="contact-menu-item"><a href="./contact.html">Contact</a></li>
  </ul>
  
  <hr />
  </header>
      `;
  }
}

// Define custom elements
customElements.define("desktop-header", DesktopHeader);

// Define DOM elements

const body = document.querySelector("body");

const introPic = document.getElementById("intro-pic");
const introPicDrums = document.getElementById("intro-pic-drums");

const projectsMenuItem = document.getElementById("projects-menu-item");
const projectsMenu = document.getElementById("projects-menu");
const tutoringMenuItem = document.getElementById("tutoring-menu-item");
const tutoringMenu = document.getElementById("tutoring-menu");

const aboutMenuItem = document.getElementById("about-menu-item");
const contactMenuItem = document.getElementById("contact-menu-item");

// DOM Functions

function showProjectsMenu() {
  projectsMenu.classList.remove("projects-menu-hidden");
  projectsMenu.classList.add("projects-menu-shown");
  projectsMenuItem.classList.add("menu-item-active");
}

function hideProjectsMenu() {
  projectsMenu.classList.remove("projects-menu-shown");
  projectsMenu.classList.add("projects-menu-hidden");
  projectsMenuItem.classList.remove("menu-item-active");
}

function showTutoringMenu() {
  tutoringMenu.classList.remove("tutoring-menu-hidden");
  tutoringMenu.classList.add("tutoring-menu-shown");
  tutoringMenuItem.classList.add("menu-item-active");
}

function hideTutoringMenu() {
  tutoringMenu.classList.remove("tutoring-menu-shown");
  tutoringMenu.classList.add("tutoring-menu-hidden");
  tutoringMenuItem.classList.remove("menu-item-active");
}

// Event listeners

projectsMenuItem.addEventListener("mouseenter", () => {
  showProjectsMenu();
  hideTutoringMenu();
});

projectsMenu.addEventListener("mouseleave", () => {
  hideProjectsMenu();
});

projectsMenuItem.addEventListener("click", () => {
  hideProjectsMenu();
});

tutoringMenuItem.addEventListener("mouseenter", () => {
  showTutoringMenu();
  hideProjectsMenu();
});

tutoringMenu.addEventListener("mouseleave", () => {
  hideTutoringMenu();
});

tutoringMenuItem.addEventListener("click", () => {
  hideTutoringMenu();
});

aboutMenuItem.addEventListener("mouseenter", () => {
  hideProjectsMenu();
  hideTutoringMenu();
});

contactMenuItem.addEventListener("mouseenter", () => {
  hideProjectsMenu();
  hideTutoringMenu();
});

//////////////////////////////////////////////
// Define custom elements/web components /////
//////////////////////////////////////////////

class DesktopHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
    <img class="logo" src="./media/images/AdamBCodesLogo.png" alt="" />
    <ul class="menu-hor">
      <div id="project-menu-container">
        <li id="projects-menu-item" class="menu-item"><a href="#webdev-projects">Projects</a></li>
        <ul id="projects-menu" class="projects-menu-hidden">
          <li class="projects-menu-item"><a href="#webdev-projects">Web Development Projects</a></li>
          <li class="projects-menu-item"><a href="#coding-projects">Coding Projects</a></li>
          <li class="projects-menu-item"><a href="#other-projects">Other Projects</a></li>
        </ul>
      </div>
      <li><a href="./tutoring.html">Tutoring</a></li>
      <li><a href="./about.html">About Me</a></li>
      <li><a href="./contact.html">Contact</a></li>
  </ul>
  
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

// swapIntroPics = () => {
//     if(introPic.classList.contains("hidden-pic")) {
//         introPic.classList.remove("hidden-pic");
//         introPic.classList.add("shown-pic");
//         introPicDrums.classList.remove("shown-pic");
//         introPicDrums.classList.add("hidden-pic");
//     }
//     else {
//         introPic.classList.remove("shown-pic");
//         introPic.classList.add("hidden-pic");
//         introPicDrums.classList.remove("hidden-pic");
//         introPicDrums.classList.add("shown-pic");
//     }
// }

// Event listeners

projectsMenuItem.addEventListener("mouseenter", () => {
  projectsMenu.classList.remove("projects-menu-hidden");
  projectsMenu.classList.add("projects-menu-shown");
  projectsMenuItem.classList.add("menu-item-active");
});

projectsMenu.addEventListener("mouseleave", () => {
  projectsMenu.classList.remove("projects-menu-shown");
  projectsMenu.classList.add("projects-menu-hidden");
  projectsMenuItem.classList.remove("menu-item-active");
});

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
            <li><a href="#webdev-projects">Projects</a></li>
            <li><a href="./tutoring.html">Tutoring</a></li>
            <li><a href="./about.html">About Me</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
        </header>
      `
    }
}

// Define custom elements
customElements.define("desktop-header", DesktopHeader);




body = document.querySelector('body');

introPic = document.getElementById('intro-pic');
introPicDrums = document.getElementById('intro-pic-drums');

swapIntroPics = () => {
    if(introPic.classList.contains("hidden-pic")) {
        introPic.classList.remove("hidden-pic");
        introPic.classList.add("shown-pic");
        introPicDrums.classList.remove("shown-pic");
        introPicDrums.classList.add("hidden-pic");
    }
    else {
        introPic.classList.remove("shown-pic");
        introPic.classList.add("hidden-pic");
        introPicDrums.classList.remove("hidden-pic");
        introPicDrums.classList.add("shown-pic");
    }
}



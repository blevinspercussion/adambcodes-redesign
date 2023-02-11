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



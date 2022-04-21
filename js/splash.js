let splash = document.getElementById("splash")

function end(){
    splash.style.opacity = "0";
}

function time(){
    setTimeout(end, 1500);
}

time();
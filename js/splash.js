//lynges kode

let splash = document.getElementById("splash")

function end(){
    splash.style.opacity = "0";
}

function time(){
    if(document.getElementById("splash") !== null){
        setTimeout(end, 1500);
    }
    
}

time();
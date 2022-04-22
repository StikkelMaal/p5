// lynges code

let pages = ["index.html", "købbillet.html", "index.html", "støtos.html", "omos.html", "frivillige.html", "sponsor.html"]
let topage;

function knap(hvor){
    let links = document.getElementsByClassName("nav-link");
    for(let i = 0; i < pages.length; i++){
        if(i == hvor){
            topage = i;
            if(i !== 0){
                links[i-1].style.color = "red";
            }
        }else{
        }
    }
    setTimeout(turnpage, 250);
}

function turnpage() {
    window.location.href = pages[topage]
}

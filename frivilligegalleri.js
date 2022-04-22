var indexValue = 0;
setTimeout(sildeShow, 2500);
function sildeShow(){
    var x;
    const img = document.querySelectorAll("img");
    for(x = 0; x < img.length; x++){
    img[x].style.display = "none"; 

    }
    indexValue++;
    if(indexValue > img.length){indexValuev = 1}
    img[indexValue -1].style.display = "block"; 

}
sildeShow();
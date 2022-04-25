var indexValue = 0;
      function slideShow(){
        var x;
        const img = document.getElementsByClassName("frigal");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
        setTimeout(slideShow, 2500);
      }
      slideShow();
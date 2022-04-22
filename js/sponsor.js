  //lucass kode
  
  let myImage = document.getElementById("mainImage");
    let myImage1 = document.getElementById("mainImage1");
      let myImage2 = document.getElementById("mainImage2");
  let imageArray = [
    'assets/sponsorer/sponsor1.png',
    'assets/sponsorer/sponsor2.png',
    'assets/sponsorer/sponsor3.png',
    'assets/sponsorer/sponsor4.png',
  ]
  let imageArray1 = [
    'assets/sponsorer/sponsor5.png',
    'assets/sponsorer/sponsor6.png',
    'assets/sponsorer/sponsor7.jpg',
    'assets/sponsorer/sponsor8.jpg',
   ]
  let imageArray2 = [
    'assets/sponsorer/sponsor9.jpg',
    'assets/sponsorer/sponsor10.png',
    'assets/sponsorer/sponsor11.png',
    'assets/sponsorer/sponsor12.png',
                              ];
  let imageIndex = 0;

  function changeImage(image,array) {
      myImage.setAttribute("src", imageArray[imageIndex]);
      imageIndex++;
      if (imageIndex > 3 ) {imageIndex = 0;}
      setTimeout(changeImage, 2000);
  }
  function changeImage1(image,array) {
      myImage1.setAttribute("src", imageArray1[imageIndex]);
      if (imageIndex > 3 ) {imageIndex = 0;}
      setTimeout(changeImage1, 2000);
  }
  function changeImage2(image,array) {
      myImage2.setAttribute("src", imageArray2[imageIndex]);
      if (imageIndex > 3 ) {imageIndex = 0;}
      setTimeout(changeImage2, 2000);
  }


  changeImage();
  changeImage1();
  changeImage2();


  for(let i=0; i<2; i++){
    console.log(imageArray2[i]);
}

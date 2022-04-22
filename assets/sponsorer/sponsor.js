sponsor.js
  var myImage = document.getElementById("mainImage");
  var imageArray = [
  'assets/sponsorer/sponsor1.png',
  'assets/sponsorer/sponsor2.png',
  'assets/sponsorer/sponsor3.jpg',
  'assets/sponsorer/sponsor4.png',
  'assets/sponsorer/sponsor5.png',
  'assets/sponsorer/sponsor6.png',
  'assets/sponsorer/sponsor7.jpg',
  'assets/sponsorer/sponsor8.jpg',
  'assets/sponsorer/sponsor9.jpg',
  'assets/sponsorer/sponsor10.png',
  'assets/sponsorer/sponsor11.png',
  'assets/sponsorer/sponsor12.png',
                              ];
  var imageIndex = 1;

  function changeImage() {
      myImage.setAttribute("src", imageArray[imageIndex]);
      imageIndex++;
      if (imageIndex > 3 ) {imageIndex = 0;}
  }

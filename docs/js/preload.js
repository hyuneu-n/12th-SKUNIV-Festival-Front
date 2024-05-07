window.onload = function() {
    var imageURLs =
    [
        '../assets//images/skulikelion_logo_1080.png',
        '../assets//images/HANSUP.png',
        '../assets//images/dong.png',
        '../assets//images/jung.png',
        '../assets//images/hyun.png',
        '../assets//images/seo.png',
        '../assets//images/so.png',
        '../assets//images/seung.png',
        '../assets//images/hyo.png',
        '../assets//images/Chang.png',
        '../assets/images/homePage/3dmapp.png',
        '../assets/images/homePage/Pinkmuhly.png',
        '../assets/images/homePage/main3.png',
        '../assets/images/homePage/cdreal.png',
        '../assets/images/homePage/playlist.png',
        '../assets/images/homePage/bottom.png',
        '../assets/images/homePage/playbar.svg',
        '../assets/images/homePage/backgroundimage.png',
        '../assets/images/homePage/cdleft.svg',
        '../assets/images/homePage/cdright2.png',
        '../assets/images/booth/boothMap3.png',
        '../assets/images/booth/pin.svg',
        '../assets/images/booth/boothMap3.png',
        '../assets/images/booth/pin.svg',
        '../assets/images/aedGIFPNG.gif',
        '../assets/images/bg.png',
        '../assets/images/info2.png',
        '../assets/images/menubar/menubarImage.svg',
        '../assets/images/icon_back.svg',
        '../assets/images/icon_photo.svg',
        '../assets/images/menubar/menubarImage.svg',
        '../assets/images/Notice/write.png',
        '../assets/images/Notice/trashh.png',
        '../assets/images/Notice/bar.png',
        '../assets/images/timetable/Vector.svg',
        '../assets/images/timetable/background.png',
        '../assets/images/timetable/Vector (2).svg',
        '../assets/images/timetable/fromis9(2).svg',
        '../assets/images/timetable/haswa3.svg',
        '../assets/images/timetable/Heize3.svg',
        '../assets/images/timetable/DJ2.svg',
        '../assets/images/timetable/Day6(3).svg',
        '../assets/images/timetable/hwasaaa.png',
        '../assets/images/timetable/from.png',
        '../assets/images/timetable/dynamicDuo.png', 
        '../assets/images/timetable/Heize.png', 
        '../assets/images/timetable/day6.png',
        '../assets/images/timetable/DJ.png'
    ];
  
    function preloadImages(imageURLs) {
      for (var i = 0; i < imageURLs.length; i++) {
        var img = new Image();
        img.src = imageURLs[i];
      }
    }
    
    preloadImages(imageURLs);
  }
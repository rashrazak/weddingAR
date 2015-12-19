'Use Strict';
angular.module('App').controller('GalleryControllerUser', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

 $scope.user = {};
  
 $scope.items = [
  {
    src:'http://4.bp.blogspot.com/-2qlSE5n4MUs/UwNLycYRYRI/AAAAAAAABPg/66dGFMKVHeI/s1600/tangan1.jpg',
    
   sub: "bunga tangan 1"+ '<br>' + 'harga: RM 50' + '<br>' + "<a class='button button-assertive' ng-click='user.value(80)'>BOOK</a>",
    value: 80
  },
  
  {
    src:'https://whatalovelywedding.files.wordpress.com/2011/06/dsc_7726.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://casavinaflorist.com/wp-content/uploads/2013/01/bunga_tangan1.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'https://s-media-cache-ak0.pinimg.com/736x/53/4d/8b/534d8b61af17ec0916533b1e6989e9ab.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://katapernikahan.com/wp-content/uploads/2015/06/Contoh-gambar-bucket-bunga-tangan-pernikahan-4.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'https://whatalovelywedding.files.wordpress.com/2011/10/258554_173554872709333_114773941920760_469240_1447492_o.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'https://byciaflorist.files.wordpress.com/2013/09/bunga-tangan-12.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'https://byciaflorist.files.wordpress.com/2013/09/bunga-ros-nikah.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://penulispro.com/wp-content/uploads/2015/04/dsc_3774.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://pesonapengantin.karangkraf.com/polopoly_fs/1.173845!/image/image.jpg_gen/derivatives/landscape_700/image.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'https://byciaflorist.files.wordpress.com/2013/03/bunga-pengantin011.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://farm4.static.flickr.com/3600/3322910935_2684aed9c4.jpg?v=0',
    sub: '' /* Not showed */
  },
  
   {
    src:'http://www.cornerfloristshop.com/wp-content/themes/Rejuvenate/images/dummy/slider_img1.png',
  sub: "bunga tangan 2"+ '<br>' + 'harga: RM 50' + '<br>' + "<a class='button button-assertive' href='facebook.com'>BOOK</a>"
 
  },
  {
    src:'http://tokobungahana.com/imgupl/_BUNGA_TANGAN2%20(1).jpg',
    sub: "bunga tangan 3"+ '<br>' + 'harga: RM 50' + '<br>' + "<a class='button button-assertive' href='facebook.com'>BOOK</a>"
  }
]

$scope.items1 = [
  {
    src:'https://whatalovelywedding.files.wordpress.com/2010/03/dsc_1802.jpg',
    
    sub: "dulang hantaran 1"+ '<br>' + 'harga: RM 50' + '<br>' + "<a class='button button-assertive' href='facebook.com'>BOOK</a>"
 
  },
  
  {
    src:'https://dreamandfantasy.files.wordpress.com/2013/09/img_3323.jpg',
    sub: "dulang hantaran 2"+ '<br>' + 'harga: RM 50' + '<br>' + "<a class='button button-assertive' href='facebook.com'>BOOK</a>"
 
  },
  //  {
  //   src:'https://syafiqahmazlan.files.wordpress.com/2011/11/img_0730.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'https://syafiqahmazlan.files.wordpress.com/2011/11/img_0724.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'https://hantaransforpengantins.files.wordpress.com/2013/06/941250_575083825847898_1512649071_n.jpg?w=850',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'https://qanasuri.files.wordpress.com/2011/05/sample-hantaran-nadia.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'http://2.bp.blogspot.com/_zTj5hBiMtjg/TM5yiEP33SI/AAAAAAAAADU/7VgrRk05I6M/s1600/2+layer+Satin+(Off+White).jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'http://www.syokkahwin.com/direktorikahwin/ziera-dulang-hantaran.jpg',
  //   sub: ''  Not showed 
  // },
  
  {
    src:'http://2.bp.blogspot.com/-wTLPJHVRD20/T8YA6CAq4fI/AAAAAAAACek/eHQL6gRcGpM/s1600/DSC05440.JPG',
     sub: "dulang hantaran 1"+ '<br>' + 'harga: RM 50' + '<br>' + "<a class='button button-assertive' ng-click='harga(80)' >BOOK</a>"
 
  }
]
$scope.items2 = [
  {
    src:'https://s-media-cache-ak0.pinimg.com/736x/f4/b3/6c/f4b36c7db495ecee51e6af202791b289.jpg',
    
    sub: ''
  },
  
  {
    src:'http://3.bp.blogspot.com/-PR3ntHTB_6M/Tp0CnOhEoDI/AAAAAAAAAYo/Ae3yWen2WpE/s1600/163426_1432412963818_1037718631_31296556_3754215_n.jpg',
    sub: '' /* Not showed */
  },
  //  {
  //   src:'https://s-media-cache-ak0.pinimg.com/736x/63/d2/87/63d28743fc5cff7eceeab7ab5284c501.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'http://vital-stream-trading-company.tradenote.net/images/users/000/044/832/products_images/Long_Sleeve_Tulle___Lace_Wedding_Dress.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'http://photo.planyourwedding.my/thumbs/250x208xzc/images/2014/apr/29/vendor_836/4074/baju_butik_pengantin_inai2.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'https://s-media-cache-ak0.pinimg.com/736x/f4/b3/6c/f4b36c7db495ecee51e6af202791b289.jpg',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'http://1.bp.blogspot.com/-ZXJhU61dwqo/UP6qR5HFtEI/AAAAAAAADJI/pGAKRNzVQ4M/s1600/_MG_5018.JPG',
  //   sub: '' /* Not showed */
  // },
  //  {
  //   src:'http://4.bp.blogspot.com/-v-yu50S8YOE/UVR4PTcU9NI/AAAAAAAAIHk/s1WzvLGxztI/s1600/baju+pengantin+terkini.jpg',
  //   sub: ''  Not showed 
  // },
  
  {
    src:'https://s-media-cache-ak0.pinimg.com/236x/a6/1a/52/a61a528a79013273ce6283669770181a.jpg',
    thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
  }
]
$scope.items3 = [
  {
    src:'http://photo.planyourwedding.my/images/2014/apr/3/vendor_684/3527/ilham_kayaman_studio_collection_malay_wedding_pelamin6.jpg',
    
    sub: ''
  },
  
  {
    src:'http://3.bp.blogspot.com/-CF6io-hK6tE/T31nieCqXcI/AAAAAAAAAB4/LMQKC9o1qWc/s1600/his+house.PNG',
    sub: '' /* Not showed */
  },
   {
    src:'https://bellsareringing.files.wordpress.com/2008/11/dsc_0965.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'https://megabridalcreationsdotcom.files.wordpress.com/2013/03/pelamin-11.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://static1.squarespace.com/static/5304417be4b0528766c00677/t/546c2ca1e4b06ce240bff613/1416375457619/',
    sub: '' /* Not showed */
  },
   {
    src:'http://3.bp.blogspot.com/-hQwo1SkmZro/UWm2gD3NM7I/AAAAAAAAAKE/e2oGshiJbZI/s640/6346_331150513664551_1000727733_n.png',
    sub: '' /* Not showed */
  },
   {
    src:'https://thebridalhouse.files.wordpress.com/2012/04/561245_201861203257706_100003014832572_317854_818411183_n.jpg',
    sub: '' /* Not showed */
  },
   {
    src:'http://1.bp.blogspot.com/-I-sGoswBsoE/UIgJIA7cLtI/AAAAAAAAGjU/9I3B0AZMICI/s1600/pelamin.jpg',
    sub: ''  
  },
  
  {
    src:'https://profiliociouscity.files.wordpress.com/2014/03/432057_250198178402150_1512432310_n.jpg',
    thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
  }
]
  
    

    $scope.counter = 0;
    $scope.submit = function(price){
          $scope.counter += price;
          console.log( $scope.counter );

    }
   
    console.log($scope.items.src);



 }
);
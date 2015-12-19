'Use Strict';
angular.module('App').controller('customerListController', function ($scope, $state,$cordovaOauth, $ionicListDelegate, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Chats) {
  
  var ref = new Firebase('https://blistering-heat-881.firebaseio.com/profile');

 ref.on("value", function(snapshot){

        console.log(snapshot.val());
         
          $scope.chats = snapshot.val();

         
    });
 $scope.remove = function(key){

   var itemRef = new Firebase(FURL + '/' + 'profile' + '/' + key);
  itemRef.remove();
   console.log(key);

 }

}
).factory('Chats', function() {
  // Might use a resource here that returns a JSON array
    var chats = [];


 //console.log(test);
  // var chats = [{
  //   id: 0,
  //   name: 'Nur Atiqa',
  //   lastText: 'Sungai Buloh',
  //   face: 'img/atiqa.jpg'
  // }, {
  //   id: 1,
  //   name: 'Alin Nadjwa',
  //   lastText: 'Kuala Lumpur',
  //   face: 'img/alin.jpg'
  // }, {
  //   id: 2,
  //   name: 'Nur Ashikin',
  //   lastText: 'Kota Bharu',
  //   face: 'img/ikin.jpg'
  // }, {
  //   id: 3,
  //   name: 'Rashdan Razak',
  //   lastText: 'Kajang',
  //   face: 'img/rashdan.jpg'
  // }, {
  //   id: 4,
  //   name: 'Nusrah Anuar',
  //   lastText: 'Ipoh',
  //   face: 'img/nusrah.jpg'
  // }];

  return {
    
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    // get: function(chatId) {
    //   for (var i = 0; i < chats.length; i++) {
    //     if (chats[i].id === parseInt(chatId)) {
    //       return chats[i];
    //     }
    //   }
    //   return null;
    // }
  };


});
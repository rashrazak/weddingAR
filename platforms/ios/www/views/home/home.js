'Use Strict';
angular.module('App').controller('homeController', function ($rootScope, $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup,$localStorage, $firebaseObject, Auth, FURL, Utils) {

    console.log($localStorage.email); 
    $scope.emailx = $localStorage.email;
    console.log($scope.emailx);

    console.log($localStorage.userkey);
  submitInfo =  function(){

  		var fullname = $scope.fullnamex;
  		var icpp = $scope.icppx;
  		var city = $scope.cityx;


  }

}
);

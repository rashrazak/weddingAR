'Use Strict';
angular.module('App').controller('InformationCtrl', function ($rootScope, $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup,$localStorage, $firebaseObject, Auth, FURL, Utils) {

    console.log($localStorage.email); 
    $scope.emailx = $localStorage.email;
    console.log($scope.emailx);

    console.log($localStorage.userkey);
  submitInfo =  function(){

  		var fullname = $scope.fullnamex;
  		var icpp = $scope.icppx;
  		var city = $scope.cityx;
  		var phone = $scope.phonenox;
  		var profile = "PROFILE/";
  		var ref = new Firebase($rootScope.baseUrl + profile + $localStorage.userkey );
  		ref.update({

  				city: city,
  				fullname: fullname,
  				icpp: icpp,
  				phoneno: phone
  		});
  }

}
);

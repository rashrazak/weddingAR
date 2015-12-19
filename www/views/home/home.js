'Use Strict';
angular.module('App').controller('homeController', function ($rootScope, $scope, $state,$cordovaOauth, $localStorage, $firebaseArray, $location,$http,$ionicPopup,$localStorage, $firebaseObject, Auth, FURL, Utils) {

       var userkey = $localStorage.userkey;
    var ref = new Firebase('https://blistering-heat-881.firebaseio.com/profile/'+ userkey);

    ref.on("value", function(snapshot){

        console.log(snapshot.val());
        	var info = snapshot.val();

        	console.log(info.email); 
    $scope.emailx = info.email;
    $scope.fullnamex = info.fullname;
    console.log($rootScope.baseUrl);
    console.log($rootScope.info);
    $scope.phonenox = info.phone;
    console.log($localStorage.userkey);
    $scope.icppx = info.icpp;
    $scope.password = info.password;
    $scope.city = info.city;


    });
 
    
  			


   


// ).factory('sendValue');
});
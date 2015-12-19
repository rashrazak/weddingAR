'Use Strict';
angular.module('App').controller('InformationCtrl', function ($rootScope, $scope, $state,$cordovaOauth, $localStorage, $firebaseArray, $location,$http,$ionicPopup,$localStorage, $firebaseObject, Auth, FURL, Utils) {

       var userkey = $localStorage.userkey;
    var ref = new Firebase('https://blistering-heat-881.firebaseio.com/profile/'+ userkey);

    ref.on("value", function(snapshot){

        console.log(snapshot.val());
      var user = snapshot.val();
    $scope.emailx = $localStorage.email;
    $scope.fullname = user.fullname;
    $scope.icpp = user.icpp;
    $scope.phoneno = user.phone;
    $scope.city = user.city;
    console.log($rootScope.baseUrl);
    
    console.log($localStorage.userkey);

     
    });
     $scope.user = {};
    $scope.submit = function(){

          var fullnamey = $scope.user.fullnamex;
          var icppy = $scope.user.icppx;
          var cityy = $scope.user.cityx;
          var phonenoyy = $scope.user.phonenox;
        
        
        console.log($scope.user.icppx);

        var onComplete = function(error) {
  if (error) {
    console.log('Synchronization failed');
  } else {
    console.log('Synchronization succeeded');
  }
};
var ref2 = new Firebase('https://blistering-heat-881.firebaseio.com/profile/'+ userkey);
        ref2.update({
            fullname: fullnamey,
            icpp: icppy,
            city: cityy,
            phone: phonenoyy


        }, onComplete);

        $rootScope.notify("Your profile is updated!");
        $state.go('tab1.home');




    }
 
    
  			


   


// ).factory('sendValue');
});

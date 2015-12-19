'Use Strict';
angular.module('App').controller('adminCustomerController', function ($rootScope, $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup,$localStorage, $firebaseObject, Auth, FURL, Utils) {
  $rootScope.info = "incomplete";
     $scope.register = function(user) {
    if(angular.isDefined(user)){
    Utils.show();
    Auth.register(user)
      .then(function() {
        Utils.hide();
         console.log("Antes de loguear:" + JSON.stringify(user));
         Utils.alertshow("Successfully","The User was Successfully Created.");
         $location.path('/');
      }, function(err) {
         Utils.hide();
         Utils.errMessage(err);
      });
    }
  };

}
);

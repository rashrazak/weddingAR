'Use Strict';
angular.module('App').controller('SettingController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

   $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }


}
);

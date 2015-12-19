'Use Strict';
angular.module('App').controller('loginController', function ($scope, $rootScope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
    console.log("Successlaa");
    if(angular.isDefined(user)){
    Utils.show();
    Auth.login(user)
      .then(function(authData) {
      //console.log("id del usuario:" + JSON.stringify(authData));

      ref.child('profile').orderByChild("id").equalTo(authData.uid).on("child_added", function(snapshot) {
        console.log(snapshot.key());
        userkey = snapshot.key();
        var obj = $firebaseObject(ref.child('profile').child(userkey));

        obj.$loaded()
          .then(function(data) {

            if(obj.email == "test123@gmail.com"){
                $localStorage.email = obj.email;
            $localStorage.userkey = userkey;
            $rootScope.Usermail =obj.email;
            $rootScope.passwordx = userkey;

              Utils.hide();
              $state.go('tab.chats');
              console.log("This is admin","Admin");
            }else{
            //console.log(data === obj); // true
            //console.log(obj.email);
            $localStorage.email = obj.email;
            $localStorage.userkey = userkey;

              Utils.hide();
              $state.go('tab1.home');
              console.log(localStorage.userkey);
              console.log(localStorage.email);

            };

          })
          .catch(function(error) {
            console.error("Error:", error);
          });
      });

      }, function(err) {
        Utils.hide();
         Utils.errMessage(err);
      });
    }
  };

});

'Use Strict';
angular.module('App').controller('ChatsController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Socket) {
     $scope.nickname = $localStorage.email //hold parameter value from loginController
        $scope.hantarla = [];


      var hantar = {message: " telah masuk", sender: $scope.nickname}; 

      Socket.on("connect", function(){ // server side panggil connection; client side panggil connect
        Socket.emit("Message" , hantar);
      });
      Socket.on("Message", function(hantar){
        $scope.hantarla.push(hantar);
      })

       $scope.sendMessage = function(){
            var newMessage = {sender:'' ,message:'', socketID: '' };
            newMessage.sender = $scope.nickname;
            newMessage.message = $scope.message;
            newMessage.socketID = $scope.socketID;

            Socket.emit("Message", newMessage);
          }

    
  

}
).factory('Socket', function(socketFactory){

  var myIoSocket = io.connect('https://chationic-burmy.c9users.io/');

  mySocket = socketFactory({

    ioSocket: myIoSocket

  })
  return mySocket;

});


'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages', 'ion-gallery'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider


.state('homepage', {
      url: '/homepage',
      templateUrl: 'views/homepage/homepage.html'
      // controller:'homepageController'
    })

.state('about', {
      url: '/about',
      templateUrl: 'views/about/about.html'
      // controller:'homepageController'
    })




     .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/tabs.html'
  })

.state('tab.adminCustomer', {
      url: '/adminCustomer',
      // templateUrl: 'views/adminCustomer/adminCustomer.html'
      // controller:'homepageController'
    views: {
      'tab-adminCustomer': {
        templateUrl: 'views/adminCustomer/adminCustomer.html',
        //
        controller: 'adminCustomerController'
      }
    }
  })

 .state('tab1', {
    url: '/tab1',
    abstract: true,
    templateUrl: 'views/tabs1.html'
  })




  .state('tab.customer', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        //
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', { // untuk admin
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'views/chats/chatsAdmin.html',
        // controller: 'ChatsController'
        }
      }
    })
    // .state('tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/chat-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })
.state('tab.customerList', {
    url: '/customerList',
    views: {
      'tab-customerList': {
        templateUrl: 'views/customerList/customerList.html',
        controller: 'customerListController'
       }
    }
  })

  .state('tab.settingAdmin', {
    url: '/settingAdmin',
    views: {
      'tabSetting': {
        templateUrl: 'views/adminSetting/adminSetting.html',
        controller: 'settingAdminController'
       }
    }
  })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
   
    //tab 1 untuk user,, tab untuk admin
    .state('tab1.home', {
      url: '/home',
      views: {
        'tab1Home': {
          templateUrl: 'views/home/home.html',
           controller:'homeController'
        }
      }
     
    })
    .state('tab1.chats', {
      url: '/chats',
      views: {
        'tab1Chats': {
          templateUrl: 'views/chats/chatsUser.html',
           controller:'ChatsControllerUser'
        }
      }
     
    })
    .state('tab1.gallery', {
      url: '/gallery',
      views: {
        'tab1Gallery': {
          templateUrl: 'views/gallery/galleryUser.html',
           controller:'GalleryControllerUser'
        }
      }
     
    })
    .state('tab1.setting', {
      url: '/setting',
      views: {
        'tab1Setting': {
          templateUrl: 'views/setting/setting.html',
           controller:'SettingController'
        }
      }
     
    })
    .state('userInformation', {
      url: '/userInformation',
      templateUrl: 'views/userInformation/userInformation.html',
      controller:'InformationCtrl'
    })

 .state('contactUs', {
      url: '/contactUs',
      templateUrl: 'views/contactUs/contactUs.html',
      controller:'contactUsCtrl'
    })

   
    ;
$urlRouterProvider.otherwise("/homepage");
})


// Changue this for your Firebase App URL.
.constant('FURL', 'https://blistering-heat-881.firebaseio.com/')
.run(function($ionicPlatform, $ionicLoading, $firebase, $firebaseAuth, $rootScope, $window) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar  above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
     $rootScope.baseUrl = 'https://blistering-heat-881.firebaseio.com/';
        var authRef = new Firebase($rootScope.baseUrl);
        $rootScope.auth = $firebaseAuth(authRef);

        $rootScope.show = function(text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        $rootScope.hide = function() {
            $ionicLoading.hide();
        };

        $rootScope.notify = function(text) {
            $rootScope.show(text);
            $window.setTimeout(function() {
                $rootScope.hide();
            }, 1999);
        };

        $rootScope.logout = function() {
            $rootScope.auth.$logout();
            $rootScope.checkSession();
        };

        // $rootScope.checkSession = function() {
        //     var auth = new FirebaseSimpleLogin(authRef, function(error, user) {
        //         if (error) {
        //             // no action yet.. redirect to default route
        //             $rootScope.userEmail = null;
        //             $window.location.href = '#/auth/signin';
        //         } else if (user) {
        //             // user authenticated with Firebase
        //             $rootScope.userEmail = user.email;
        //             $window.location.href = ('#/bucket/list');
        //         } else {
        //             // user is logged out
        //             $rootScope.userEmail = null;
        //             $window.location.href = '#/auth/signin';
        //         }
        //     });
        // }
    
  });
});

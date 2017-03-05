angular.module('networkingApp', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('login',{
            url:'/login',
            templateUrl: '../login/login.html',
            controller: 'loginCtrl'
          })
          .state('logout',{
            url:'/login',
            templateUrl: '../login/login.html',
            // templateUrl: 'index.html',
          })
          .state('signup',{
            url:'/signup',
            templateUrl: '../signup/signup.html',
            controller: 'signupCtrl'
          })
          .state('landing',{
            url:'/landing/:id',
            templateUrl: '../landing/landing.html',
            controller: 'landingCtrl'
          })
          .state('friendsLibrary',{
            url:'/friendsLibrary/:id',
            templateUrl: '../friendsLibrary/friendsLibrary.html',
            controller: 'friendsLibraryCtrl'
          });

      $urlRouterProvider
          .otherwise('/');
    });

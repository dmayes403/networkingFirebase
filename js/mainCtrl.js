angular.module('networkingApp')
    .controller('mainCtrl', function($scope, userServ){

      $scope.checkCredentials = function(userName, password){
        userServ.checkCredentials(userName, password);
      };

      initializeStorage = function(){
        var setupStorage = userServ.getUserData()
        localStorage.setItem(1,JSON.stringify(setupStorage));
      }

      initializeStorage();

    });

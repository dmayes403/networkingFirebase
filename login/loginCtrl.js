angular.module('networkingApp')
    .controller('loginCtrl', function($scope, userServ, $state){
        $scope.checkCredentials = function(user, pass){
          // return userServ.checkCredentials(user, pass);
          const found = userServ.checkCredentials(user, pass);
          console.log(found)
          if(found){
            $state.go('landing', {id: found.id})
          }
        }
    })

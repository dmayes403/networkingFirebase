angular.module('networkingApp')
    .controller('loginCtrl', function($scope, userServ, $state){
        $scope.object = userServ.object;

        $scope.checkCredentials = function(email, pass){
          const found = userServ.checkCredentials(email, pass);
          if(found){
            console.log(found.$id)
            $state.go('landing', {id: found.$id})
          }
        }

        $scope.addFireComment = function(word){
          userServ.addFireComment(word);
        }

    })

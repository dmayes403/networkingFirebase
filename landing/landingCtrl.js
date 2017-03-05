angular.module('networkingApp')
    .controller('landingCtrl', function($scope, $stateParams, userServ){
        $scope.userLanding = userServ.getUser($stateParams.id);

        $scope.addComment = function(id, comment){
          userServ.addComment(id, comment);
          $scope.userLanding = userServ.getUser($stateParams.id);
          $scope.newComment = ''
        }
    })

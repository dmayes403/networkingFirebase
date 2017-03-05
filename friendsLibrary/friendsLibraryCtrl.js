angular.module('networkingApp')
    .controller('friendsLibraryCtrl', function($scope, userServ, $stateParams){
        $scope.allFriends = userServ.getUserData();

        // $scope.addFriend = function(friendId, $stateParams){
        //   userServ.addFriend(friendId, $stateParams);
        //   console.log('hello')
        // }

        $scope.addFriend = function(friendId){
          userServ.addFriend(friendId, $stateParams.id);
        }

    })
